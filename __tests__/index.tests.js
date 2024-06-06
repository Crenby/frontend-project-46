import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import parser from '../src/index.js';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);

const data = [
  {
    file1: 'file3.json', file2: 'file4.json', resName: 'stylish.txt', format: 'stylish', 
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', resName: 'stylish.txt', format: 'stylish', 
  },
  {
    file1: 'file3.json', file2: 'file4.json', resName: 'plain.txt', format: 'plain', 
  },
  {
    file1: 'file1.yml', file2: 'file2.yml', resName: 'plain.txt', format: 'plain',
  },
];

data.forEach((item) => {
  test('tests', () => {
    const filename1 = getFixturePath(item.file1);
    const filename2 = getFixturePath(item.file2);
    const resultname = getFixturePath(item.resName);
    const result = readFileSync(resultname, 'utf8');
    expect(parser(filename1, filename2, item.format)).toEqual(result);
  });
});
