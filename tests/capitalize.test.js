import { capitalize } from '../src/capitalize.js';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает не верно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает не верно!');
}

console.log('Все тесты пройдены!');