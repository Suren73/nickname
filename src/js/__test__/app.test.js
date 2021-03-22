import Validator from '../app';

test('testing metod validateUsername', () => {
  const expected = true;
  const received = new Validator('An_-d197rei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('7Andrei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('Andrei7').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('And1973rei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('Анndrei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('Andrei197hkjhkjh1973n').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('_Andrei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('-Andrei').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('Andrei-').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('Andrei_').validateUsername();
  expect(received).toBe(expected);
});

test('testing metod validateUsername', () => {
  const expected = false;
  const received = new Validator('!Andrei').validateUsername();
  expect(received).toBe(expected);
});
