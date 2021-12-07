#!/usr/bin/env node
const  yargs = require('yargs/yargs');

const argv = yargs(process.argv.slice(2)).options({
  abc: { type: 'boolean', default: false },
  b: { type: 'string', demandOption: true },
  ccc: { type: 'number', alias: 'chill' },
  d: { type: 'array' },
  e: { type: 'count' },
  f: { choices: ['1', '2', '3'] }
}).argv;

console.log(argv)
