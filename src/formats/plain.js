import { isObject } from "./stylish.js";

function genPlain(data, name = "") {
  let str = "";
  data.map((item) => {
    if(item.type === 'deleted') {
      str += `Property '${name}${item.key}' was removed\n`;
    }
    if(item.type === 'added') { 
      str += `Property '${name}${item.key}' was added with value: ${isObject(item.value) ? '[complex value]' : item.value}\n`;
    }
    if(item.type === 'changed') { 
      str += `Property '${name}${item.key}' was updated. From '${isObject(item.value1) ? '[complex value]' : item.value1}' to '${item.value2}'\n`;
    }
    if(item.type === 'nested') {
      str += genPlain(item.children, name + `${item.key}.`);
    }
  })
  return str;
}

export default genPlain;