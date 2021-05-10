#!/usr/bin/env node
const { spawn } = require('child_process')

const params = process.argv.slice(2)

spawn('open', ['-a', 'Typora', ...params]);