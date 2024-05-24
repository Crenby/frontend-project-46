#!/usr/bin/env node

import { Command } from 'commander';
import parser from '../src/index.js';

const program = new Command();

program
  .description('Compares two configuration files and shows a difference.')
  .version('0.1')
  .option('-f, --format [type]', 'output format', 'stylish')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2, options) => {
    console.log(parser(filepath1,filepath2, options.format));
  });

program.parse();

//gendiff --format 'json' __fixtures__/file3.json __fixtures__/file4.json
//gendiff --format 'json' __fixtures__/file1.yml __fixtures__/file2.yml

//gendiff --format 'stylish' __fixtures__/file1.yml __fixtures__/file2.yml
//gendiff --format 'stylish' __fixtures__/file3.json __fixtures__/file4.json

//gendiff --format 'plain' __fixtures__/file1.yml __fixtures__/file2.yml
//gendiff --format 'plain' __fixtures__/file3.json __fixtures__/file4.json