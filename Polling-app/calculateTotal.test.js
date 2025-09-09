const { calculateTotal } = require('./calculateTotal');

describe('calculateTotal', () => {
  it('calculates total with tax and no discount', () => {
    expect(calculateTotal(100, 0.1)).toBe(110);
  });

  it('calculates total with tax and discount', () => {
    expect(calculateTotal(100, 0.2, 10)).toBe(110);
  });

  it('returns 0 if discount exceeds total', () => {
    expect(calculateTotal(50, 0.1, 100)).toBe(0);
  });

  it('throws error for negative price', () => {
    expect(() => calculateTotal(-1, 0.1)).toThrow('Invalid price');
  });

  it('throws error for negative tax', () => {
    expect(() => calculateTotal(100, -0.1)).toThrow('Invalid tax');
  });

  it('throws error for negative discount', () => {
    expect(() => calculateTotal(100, 0.1, -5)).toThrow('Invalid discount');
  });
});
