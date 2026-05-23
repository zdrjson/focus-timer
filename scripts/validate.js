// Dependency-free validation for the single-file app.
// 1. Confirms the inlined <script> parses as valid JavaScript.
// 2. Cross-checks that every getElementById('x') has a matching id="x" in the markup.
const fs = require('fs');
const vm = require('vm');
const path = require('path');

const file = path.join(__dirname, '..', 'index.html');
const html = fs.readFileSync(file, 'utf8');
const errors = [];

const scriptMatch = html.match(/<script>([\s\S]*?)<\/script>/);
if (!scriptMatch) {
  errors.push('No <script> block found in index.html');
} else {
  try {
    vm.compileFunction(scriptMatch[1]);
  } catch (e) {
    errors.push('JavaScript syntax error: ' + e.message);
  }

  const ids = new Set();
  let m;
  const idRe = /\sid="([^"]+)"/g;
  while ((m = idRe.exec(html)) !== null) ids.add(m[1]);

  const refRe = /getElementById\(\s*['"]([^'"]+)['"]\s*\)/g;
  while ((m = refRe.exec(scriptMatch[1])) !== null) {
    if (!ids.has(m[1])) {
      errors.push('getElementById("' + m[1] + '") has no matching element id in the HTML');
    }
  }
}

if (!/^<!DOCTYPE html>/i.test(html.trim())) {
  errors.push('Missing <!DOCTYPE html> declaration');
}

if (errors.length) {
  console.error('Validation failed:');
  errors.forEach(function (e) { console.error('  - ' + e); });
  process.exit(1);
}

console.log('Validation passed: JS syntax OK, all element references resolve.');
