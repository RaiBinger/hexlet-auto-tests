
export const capitalize = (text) => {
  if (text.length === 0) {
    return '';
  }
  const [firstChar, ...restTail] = text;
  return `${firstChar.toUpperCase()}${restTail.join('')}`;
};