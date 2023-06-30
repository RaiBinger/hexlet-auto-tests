import { capitalize } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

if (capitalize('hello') !== 'Hello') {
  throw new Error('Функция работает не верно!');
}

if (capitalize('') !== '') {
  throw new Error('Функция работает не верно!');
}

assert.equal(capitalize(''), '');

assert.equal(capitalize('hello'), 'Hello');

console.log('Все тесты пройдены!');