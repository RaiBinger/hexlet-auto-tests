import _ from 'lodash';


export const capitalize = (text) => {
  if (text.length === 0) {
    return '';
  }
  const [firstChar, ...restTail] = text;
  return `${firstChar.toUpperCase()}${restTail.join('')}`;
};

export const getDividers = (num) => {
  const dividers = [];
  for (let i = 1; i <= num; i += 1) {
    if (num % i === 0) {
      dividers.push(i);
    }
  }
  return dividers;
};
 
const   wrong1 = (items, value, fromIndex = 0) => items.indexOf(value, fromIndex);
console.log(wrong1([1, 2, 1, 2], 1));