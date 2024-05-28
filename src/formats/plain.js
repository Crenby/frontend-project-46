import { isObject } from "./stylish.js";

function genPlain(data, name = "") {
  let str = "";
  const complexValue = '[complex value]';
  data.map((item) => {
    if(item.type === 'deleted') {
      str += `Property '${name}${item.key}' was removed\n`;
    }
    if(item.type === 'added') { 
      //str += `Property '${name}${item.key}' was added with value: ${isObject(item.value) ? complexValue : `'${item.value}'`}\n`;
      str += `Property '${name}${item.key}' was added with value: ${isObject(item.value) ? complexValue : typeof(item.value) === 'string' ? `'${item.value}'` : item.value}\n`;
    }
    if(item.type === 'changed') { 
      str += `Property '${name}${item.key}' was updated. From ${isObject(item.value1) ? complexValue : typeof(item.value1) === 'string' ? `'${item.value1}'` : item.value1} to ${isObject(item.value2) ? complexValue : typeof(item.value2) === 'string' ? `'${item.value2}'` : item.value2}\n`;
    }
    if(item.type === 'nested') {
      str += genPlain(item.children, name + `${item.key}.`);
    }
  })
  return str;
}

export default genPlain;