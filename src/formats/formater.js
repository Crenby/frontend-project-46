import { addBracket } from './stylish.js';
import genPlain from './plain.js';
import genJson from './json.js';

const formaters = {
  json: genJson,
  stylish: addBracket,
  plain: genPlain,
};

export default (data, format) => formaters[format](data);
