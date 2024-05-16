import fs from 'fs';
import path from 'path';
import process from 'node:process';

function parser (path1, path2) {
  const fullPath1 = path.resolve(process.cwd(), path1); 
  const data1 = JSON.parse(fs.readFileSync(fullPath1));

  const fullPath2 = path.resolve(process.cwd(), path2); 
  const data2 = JSON.parse(fs.readFileSync(fullPath2));

  return [data1, data2];
};

export default parser;