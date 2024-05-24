import { genStylish } from './stylish.js';
import genPlain from './plain.js';
import genJson from './json.js';

const formaters = {
  json: genJson,
  stylish: genStylish,
  plain: genPlain,
};

export default (data, format) => formaters[format](data);