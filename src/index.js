import fs from 'fs';
import path from 'path';
import process from 'node:process';
import parse from './parse.js';
import buildTree from './treeBuilder.js';
import diff from './diff.js';
import genStylish from './formats/stylish.js';

function getFullPath(filepath) {
  return path.resolve(process.cwd(), filepath);
}

function extractFormat(filepath) {
  return path.extname(filepath).slice(1);
}

function getDataFile(filepath) {
  return parse(fs.readFileSync(filepath), extractFormat(filepath));
}

function parser (path1, path2) {
  const fullPath1 = getFullPath(path1); 
  const data1 = getDataFile(fullPath1);

  const fullPath2 = getFullPath(path2); 
  const data2 = getDataFile(fullPath2);

  const tree = buildTree(data1, data2);
  
  //return diff(data1, data2);
  return genStylish(tree);
};

export default parser;