const add = require('../Calculator');

describe('Calculator', () => {
  it('should return 0 if we pass empty string', () => {
    const actual = add('');
    expect(actual).toBe(0);
  });
});
