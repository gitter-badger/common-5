import { toCurrency } from '.';

describe('To Currency Function', () => {
  it('should convert 10000 to 100.00', () => {
    expect(toCurrency(10000)).toEqual('100.00');
  });

  it('should convert 1000000 to 10,000.00', () => {
    expect(toCurrency(1000000)).toEqual('10,000.00');
  });

  it('should convert 4683454 to 46,834.54', () => {
    expect(toCurrency(4683454)).toEqual('46,834.54');
  });

  it('should convert 100 to 100.00 when no division is specified', () => {
    expect(toCurrency(100, false)).toEqual('100.00');
  });

  it('should convert 465.52 to 465.52 when no division is specified', () => {
    expect(toCurrency(465.52, false)).toEqual('465.52');
  });

  it('should convert 1346.4 to 1,346.40 when no division is specified', () => {
    expect(toCurrency(1346.4, false)).toEqual('1,346.40');
  });
});
