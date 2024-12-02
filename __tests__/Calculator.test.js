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
});
