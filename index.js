#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const projectName = process.argv[2];
const packageManager = process.argv[3] === '--yarn' ? 'yarn' : 'npm';

if (!projectName) {
    console.log('Please provide a name for the project');
    process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: `./${projectName}` });

console.log(`Creating new Kerchoo app in ./${projectName}`);

execSync(`git clone git@github.com:cadenforrest/kerchoo-stack.git ${projectName}`);

run('rm -rf .git');

console.log(`Installing dependencies with ${packageManager}...`);
run(`${packageManager} install`);

console.log('Initializing git...');
run('git init');

run('git branch -m main');

console.log('Done! 🚀');