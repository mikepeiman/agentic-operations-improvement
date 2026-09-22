import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Package integrity only. This is deliberately not a prose/behavior linter.

// Raised from 6000 on 2026-09-20 (ops-lhq) to admit the message-shape rules and
// the pointer to docs/communication-inquiry.md. Raised from 7600 to 7700 on
// 2026-09-22 (ops-cth) for the AGENTS reference to docs/ui-design-guidance.md,
// which the ceiling cannot carry as a link: the core must stay self-contained for
// copy-only installs. No consolidation was available; what the addition cost is
// disclosed here rather than hidden in a trim elsewhere. The ceiling is not a
// budget: it keeps growth an explicit consolidation decision, so it sits just
// above the current core rather than wherever the next addition lands.
export const CORE_CEILING = 7700;
export function prose(text) {
  return text.replace(/^\s*(`{3,}|~{3,})[^\n]*\n[\s\S]*?^\s*\1\s*$/gm, '')
    .replace(/(`+)[^\n]*?\1/g, '');
}

export function localLinks(text) {
  const links = [];
  for (const match of prose(text).matchAll(/(?<!!)\[[^\]\n]*\]\(\s*(<[^>\n]+>|[^\s)]+)(?:\s+"[^"\n]*")?\s*\)/g)) {
    const target = match[1].replace(/^<|>$/g, '');
    if (/^[a-z][a-z\d+.-]*:/i.test(target) || target.startsWith('//')) continue;
    const file = target.split('#')[0];
    if (file) links.push(file);
  }
  return links;
}

function markdownFiles(dir) {
  if (!existsSync(dir)) return [];
  return readdirSync(dir, { withFileTypes: true }).flatMap(entry => {
    const file = path.join(dir, entry.name);
    return entry.isDirectory() ? markdownFiles(file) : file.endsWith('.md') ? [file] : [];
  });
}

export function audit(root, { coreOnly = false, adopted = false } = {}) {
  root = path.resolve(root);
  const errors = [];
  const required = ['AGENTS.md'];
  if (!coreOnly && !adopted) required.push('CLAUDE.md', 'README.md', 'docs/beads.md',
    'docs/new-project-setup.md', 'docs/weekly-review.md', 'docs/ui-design-guidance.md',
    'docs/v1-v2-review.md', 'checks/README.md');
  for (const file of required) if (!existsSync(path.join(root, file))) errors.push(`Missing ${file}`);
  const read = file => existsSync(path.join(root, file)) ? readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n') : '';
  const agents = read('AGENTS.md');
  const claude = read('CLAUDE.md');
  if (!agents.trim()) errors.push('AGENTS.md is empty');
  if (!adopted && agents.length > CORE_CEILING) errors.push(`AGENTS.md: ${agents.length} characters exceeds ${CORE_CEILING}; consolidate or disclose task-specific detail`);
  if (existsSync(path.join(root, 'CLAUDE.md')) && (claude.length > 160 || localLinks(claude).join(',') !== 'AGENTS.md')) {
    errors.push('CLAUDE.md must remain a small pointer to AGENTS.md');
  }
  // Catch the v1 packaging failure: the core cannot depend on an omitted tree.
  for (const target of adopted ? [] : localLinks(agents)) {
    if (target !== 'CLAUDE.md') errors.push(`AGENTS.md depends on ${target}; keep the copied core self-contained`);
  }
  const files = coreOnly || adopted ? ['AGENTS.md', 'CLAUDE.md'].map(file => path.join(root, file)) : [
    ...readdirSync(root, { withFileTypes: true })
      .filter(entry => entry.isFile() && entry.name.endsWith('.md')).map(entry => path.join(root, entry.name)),
    ...markdownFiles(path.join(root, 'docs')), ...markdownFiles(path.join(root, 'checks')),
  ];
  for (const file of files.filter(existsSync)) {
    for (const target of localLinks(readFileSync(file, 'utf8'))) {
      let decoded;
      try { decoded = decodeURIComponent(target); }
      catch { errors.push(`${path.relative(root, file)}: malformed link ${target}`); continue; }
      const resolved = path.resolve(path.dirname(file), decoded);
      const relative = path.relative(root, resolved);
      if (relative === '..' || relative.startsWith(`..${path.sep}`) || path.isAbsolute(relative)) {
        errors.push(`${path.relative(root, file)}: link escapes package: ${target}`);
      } else if (!existsSync(resolved)) {
        errors.push(`${path.relative(root, file)}: missing link target ${target}`);
      }
    }
  }
  return { errors, characters: agents.length, estimatedTokens: Math.ceil(agents.length / 4), files: files.filter(existsSync).length };
}

if (process.argv[1] && path.resolve(process.argv[1]) === fileURLToPath(import.meta.url)) {
  try {
    const args = process.argv.slice(2);
    const flags = args.filter(arg => arg.startsWith('--'));
    const roots = args.filter(arg => !arg.startsWith('--'));
    if (flags.some(flag => !['--core-only', '--adopted'].includes(flag)) || roots.length > 1 ||
        (flags.includes('--core-only') && flags.includes('--adopted'))) {
      throw new Error('Usage: node checks/protocol.mjs [root] [--core-only | --adopted]');
    }
    const adopted = flags.includes('--adopted');
    const result = audit(roots[0] ?? '.', { coreOnly: flags.includes('--core-only'), adopted });
    for (const error of result.errors) console.error(error);
    console.log(`${result.errors.length ? 'FAIL' : 'PASS'}: ${result.files} Markdown files; core ${result.characters} characters (~${result.estimatedTokens} tokens, characters/4 estimate).`);
    console.log(`${adopted ? 'Adopted entry files: no size ceiling or self-containment restriction' : 'Distribution: bounded self-contained core'}; checks local inline file links, not semantics, runtime behavior, anchors, reference-style links, code-span paths or external URLs.`);
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (error) {
    console.error(`Protocol check could not run: ${error.message}`);
    process.exitCode = 1;
  }
}
