function isObject(value) {
  return value !== null && typeof value === 'object';
}

function obj(data, iter = 2) {
  let space = ' '.repeat(iter); 
  let str = '{\n';
  for (let key in data) {
    if(isObject(data[key])) {
      str += `${space}  ${key}: ${obj(data[key], iter + 2)}\n`;
    } else {
      str += `${space}  ${key}: ${data[key]}\n`;
    }
    
  }
  str += `${space}}`;
  return str;
}

function genStylish(data, iter = 2) {
  let str = '{\n';

  let space = ' '.repeat(iter); 

  data.map((item) => {
    if(item.type === 'unchanged') {
      if(isObject(item.value)) {
        str += `${space}  ${item.key}: ${obj(item.value, iter + 2)}\n`;
      } else {
        str += `${space}  ${item.key}: ${item.value}\n`;
      }
    }
    if(item.type === 'deleted') {
      if(isObject(item.value)) {
        str += `${space}- ${item.key}: ${obj(item.value, iter + 2)}\n`;
      } else {
        str += `${space}- ${item.key}: ${item.value}\n`;
      }
    }
    if(item.type === 'added') { 
      if(isObject(item.value)) {
        str += `${space}+ ${item.key}: ${obj(item.value, iter + 2)}\n`;
      } else {
        str += `${space}+ ${item.key}: ${item.value}\n`;
      }
    }
    if(item.type === 'changed') { 
      if(isObject(item.value1)) {
        str += `${space}- ${item.key}: ${obj(item.value1, iter + 2)}\n`;
      } else {
        str += `${space}- ${item.key}: ${item.value1}\n`;
      }
      if(isObject(item.value2)) {
        str += `${space}+ ${item.key}: ${obj(item.value2, iter + 2)}\n`;
      } else {
        str += `${space}+ ${item.key}: ${item.value2}\n`;
      }      
    }
    if(item.type === 'nested') {
      str += `${space}  ${item.key}: ${genStylish(item.children, iter + 2)}\n`;
    }
  })

  str += `${' '.repeat(iter)}}\n`;
  return str;
}

export default genStylish;