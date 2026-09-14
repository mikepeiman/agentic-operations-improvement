import { existsSync, readFileSync, readdirSync } from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

// Package integrity only. This is deliberately not a prose/behavior linter.
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

export function audit(root, { coreOnly = false } = {}) {
  root = path.resolve(root);
  const errors = [];
  const required = ['AGENTS.md', 'CLAUDE.md'];
  if (!coreOnly) required.push('README.md', 'docs/beads.md', 'docs/v1-v2-review.md', 'checks/README.md');
  for (const file of required) if (!existsSync(path.join(root, file))) errors.push(`Missing ${file}`);
  const read = file => existsSync(path.join(root, file)) ? readFileSync(path.join(root, file), 'utf8').replace(/\r\n/g, '\n') : '';
  const agents = read('AGENTS.md');
  const claude = read('CLAUDE.md');
  if (!agents.trim()) errors.push('AGENTS.md is empty');
  if (agents.length > 6000) errors.push(`AGENTS.md: ${agents.length} characters exceeds 6000; consolidate or disclose task-specific detail`);
  if (claude.length > 160 || localLinks(claude).join(',') !== 'AGENTS.md') {
    errors.push('CLAUDE.md must remain a small pointer to AGENTS.md');
  }
  // Catch the v1 packaging failure: the core cannot depend on an omitted tree.
  for (const target of localLinks(agents)) {
    if (target !== 'CLAUDE.md') errors.push(`AGENTS.md depends on ${target}; keep the copied core self-contained`);
  }
  const files = coreOnly ? required.map(file => path.join(root, file)) : [
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
    const result = audit(args.find(arg => arg !== '--core-only') ?? '.', { coreOnly: args.includes('--core-only') });
    for (const error of result.errors) console.error(error);
    console.log(`${result.errors.length ? 'FAIL' : 'PASS'}: ${result.files} Markdown files; core ${result.characters} characters (~${result.estimatedTokens} tokens, characters/4 estimate).`);
    console.log('Checks packaging, core size and local inline file links; not semantics, runtime behavior, anchors, reference-style links, code-span paths or external URLs.');
    process.exitCode = result.errors.length ? 1 : 0;
  } catch (error) {
    console.error(`Protocol check could not run: ${error.message}`);
    process.exitCode = 1;
  }
}
