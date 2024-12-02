const add = require('../Calculator');

describe('Calculator', () => {
  it('should return 0 if we pass empty string', () => {
    const actual = add('');
    expect(actual).toBe(0);
  });

  it('should return single number when we pass string number', () => {
    const actual = add('5');

    expect(actual).toBe(5);
  });

  it('should return addition of numbers when we pass numbers in comma separated values', () => {
    const actual = add('5,6,7');

    expect(actual).toBe(18);
  });

  it('should return addition of numbers when we pass numbers in comma or new lines separated values', () => {
    const actual = add('5\n6,7');

    expect(actual).toBe(18);
  });

  it('should return addition of numbers when we pass numbers in delimiters separated values', () => {
    const actual = add('//;\n4,5,6,7');

    expect(actual).toBe(22);
  });

  it('should throw exception if there is any negative numbers', () => {
    expect(() => add('//;\n4,5,-6,-7')).toThrow('negative numbers not allowed -6,-7');
  });
});
