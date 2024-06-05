function isObject(value) {
  return value !== null && typeof value === 'object';
}

function obj(data, iter = 8) {
  const space = ' '.repeat(iter);

  if (!isObject(data)) {
    return `${data}`;
  }
  const out = Object.entries(data).map((item) => {
    if (isObject(item[1])) {
      return `\n${space}    ${item[0]}: ${obj(item[1], iter + 4)}`;
    }
    return `\n${space}    ${item[0]}: ${item[1]}`;
  });
  return `{${out.join('')}\n${space}}`;
}

function genStylish(data, iter = 0) {
  const space = ' '.repeat(iter);

  const out = data.map((item) => {
    if (item.type === 'unchanged') {
      return `${space}    ${item.key}: ${obj(item.value, iter + 4)}\n`;
    }
    if (item.type === 'deleted') {
      return `${space}  - ${item.key}: ${obj(item.value, iter + 4)}\n`;
    }
    if (item.type === 'added') {
      return `${space}  + ${item.key}: ${obj(item.value, iter + 4)}\n`;
    }
    if (item.type === 'changed') {
      return `${space}  - ${item.key}: ${obj(item.value1, iter + 4)}\n${space}  + ${item.key}: ${obj(item.value2, iter + 4)}\n`;
    }
    if (item.type === 'nested') {
      return `${space}    ${item.key}: {\n${genStylish(item.children, iter + 4)}${space}    }\n`;
    }
    return true;
  });

  return out.join('');
}

function addBracket(data) {
  const newStr = `{\n${genStylish(data)}}`;
  return newStr;
}

export { addBracket, isObject };
