import { addBracket } from './stylish.js';
import genPlain from './plain.js';
import genJson from './json.js';

function formaters(data, format) {
  switch (format) {
    case 'json':
      return genJson(data);
    case 'stylish':
      return addBracket(data);
    case 'plain':
      return genPlain(data);
    default:
      throw new Error(`${format} is not supported`);
  }
}

export default formaters;
