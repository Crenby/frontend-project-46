import { isObject } from './stylish.js';

function prepareValue(value) {
  if (isObject(value)) {
    return '[complex value]';
  }
  if (typeof value === 'string') {
    return `'${value}'`;
  }
  return value;
}

function genPlain(data, name = '') {
  const out = data.map((item) => {
    if (item.type === 'deleted') {
      return `Property '${name}${item.key}' was removed\n`;
    }
    if (item.type === 'added') {
      return `Property '${name}${item.key}' was added with value: ${prepareValue(item.value)}\n`;
    }
    if (item.type === 'changed') {
      return `Property '${name}${item.key}' was updated. From ${prepareValue(item.value1)} to ${prepareValue(item.value2)}\n`;
    }
    if (item.type === 'nested') {
      return genPlain(item.children, `${name}${item.key}.`);
    }
  });
  return out.join('');
}

function genPlainWithoutSpaces(data) {
  const newStr = genPlain(data);
  return newStr.slice(0, -1);
}

export default genPlainWithoutSpaces;
