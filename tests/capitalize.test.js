import { capitalize, getDividers } from '../src/capitalize.js';
import { strict as assert } from 'node:assert';

// if (capitalize('hello') !== 'Hello') {
//   throw new Error('Функция работает не верно!');
// }

// if (capitalize('') !== '') {
//   throw new Error('Функция работает не верно!');
// }

assert.strictEqual(capitalize(''), '');

assert.strictEqual(capitalize('hello'), 'Hello');

const actual = getDividers(9);
const expected = [1, 3, 9];

assert.deepStrictEqual(actual, expected);

console.log('Все тесты пройдены!');