import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

test('stylish json', () => {
  const filename1 = getFixturePath('file3.json');
  const filename2 = getFixturePath('file4.json');
  const resultname = getFixturePath('stylish.txt');
  const result = readFileSync(resultname, 'utf8');
  expect(parser(filename1, filename2, 'stylish')).toEqual(result);
});

test('stylish yml', () => {
  const filename1 = getFixturePath('file1.yml');
  const filename2 = getFixturePath('file2.yml');
  const resultname = getFixturePath('stylish.txt');
  const result = readFileSync(resultname, 'utf8');
  expect(parser(filename1, filename2, 'stylish')).toEqual(result);
});

test('plain json', () => {
  const filename1 = getFixturePath('file3.json');
  const filename2 = getFixturePath('file4.json');
  const resultname = getFixturePath('plain.txt');
  const result = readFileSync(resultname, 'utf8');
  expect(parser(filename1, filename2, 'plain')).toEqual(result);
});

test('plain yml', () => {
  const filename1 = getFixturePath('file1.yml');
  const filename2 = getFixturePath('file2.yml');
  const resultname = getFixturePath('plain.txt');
  const result = readFileSync(resultname, 'utf8');
  expect(parser(filename1, filename2, 'plain')).toEqual(result);
});
