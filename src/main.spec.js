const { sum } = require('./main');

describe('Test sum function', () => {
  it('should return 5', () => {
    expect(sum(2, 3)).toBe(5);
  });
});
