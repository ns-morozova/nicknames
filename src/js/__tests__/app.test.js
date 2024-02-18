import Validator from "../app";

test('Проверка имени в регулярном выражении', () => {
  const val = new Validator();

  expect(val.validateUsername('Oleg')).toBe(true);
  expect(val.validateUsername('2Oleg')).toBe(false);
  expect(val.validateUsername('Oleg_smir222v')).toBe(true);
  expect(val.validateUsername('Oleg_smir1222v')).toBe(false);
  expect(val.validateUsername('Oleg_smir1')).toBe(false);
  expect(val.validateUsername('Oleg_smir_')).toBe(false);
  expect(val.validateUsername('Oleg_smir-')).toBe(false);
  expect(val.validateUsername('.Oleg')).toBe(false);
  expect(val.validateUsername('O123leg')).toBe(true);
  expect(val.validateUsername('-O123leg')).toBe(false);
  expect(val.validateUsername('_O123leg')).toBe(false);
});
