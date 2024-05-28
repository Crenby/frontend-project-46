import fs from 'fs';
import path from 'path';
import process from 'node:process';
import parse from './parse.js';
import buildTree from './treeBuilder.js';
import formater from './formats/formater.js';

function getFullPath(filepath) {
  return path.resolve(process.cwd(), filepath);
}

function extractFormat(filepath) {
  return path.extname(filepath).slice(1);
}

function getDataFile(filepath) {
  return parse(fs.readFileSync(filepath), extractFormat(filepath));
}

function genDiff (path1, path2, format = 'stylish') {
  const fullPath1 = getFullPath(path1); 
  const data1 = getDataFile(fullPath1);

  const fullPath2 = getFullPath(path2); 
  const data2 = getDataFile(fullPath2);

  const tree = buildTree(data1, data2);
  
  return formater(tree, format);
};

export default genDiff;