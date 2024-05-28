function isObject(value) {
  return value !== null && typeof value === 'object';
}

function obj(data, iter = 2) {
  let space = ' '.repeat(iter); 
  let str = '{\n';
  if(!isObject(data)) {
    return str = `${data}`; 
  } else {
    for (let key in data) {
      if(isObject(data[key])) {
        str += `${space}  ${key}: ${obj(data[key], iter + 2)}\n`;
      } else {
        str += `${space}  ${key}: ${data[key]}\n`;
      }
    }
  }
  str += `${' '.repeat(iter)}}`;
  return str;
}

function genStylish(data, iter = 2) {
  let str = '{\n';

  let space = ' '.repeat(iter); 

  data.map((item) => {
    if(item.type === 'unchanged') {
      str += `${space}  ${item.key}: ${obj(item.value, iter + 2)}\n`;
    }
    if(item.type === 'deleted') {
      str += `${space}- ${item.key}: ${obj(item.value, iter + 2)}\n`;
    }
    if(item.type === 'added') { 
      str += `${space}+ ${item.key}: ${obj(item.value, iter + 2)}\n`;
    }
    if(item.type === 'changed') { 
      str += `${space}- ${item.key}: ${obj(item.value1, iter + 2)}\n`;
      str += `${space}+ ${item.key}: ${obj(item.value2, iter + 2)}\n`;   
    }
    if(item.type === 'nested') {
      str += `${space}  ${item.key}: ${genStylish(item.children, iter + 2)}\n`;
    }
  })

  str += `${space}}`;
  return str;
}

export { genStylish, isObject };