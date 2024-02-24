#!/usr/bin/env node

const { execSync } = require('child_process');
const fs = require('fs');

const projectName = process.argv[2];

if (!projectName) {
    console.log('Please provide a name for the project')
    process.exit(1);
}

const run = (cmd) => execSync(cmd, { stdio: 'inherit', cwd: `./${projectName}` });

console.log(`Creating new Kerchoo app in ./${projectName}`);

execSync(`git clone git@github.com:cadenforrest/kerchoo-stack.git ${projectName}` );  

run('rm -rf .git');

run('git init');