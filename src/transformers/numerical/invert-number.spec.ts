import { invertNumber } from '.';

describe('Invert Number Function', () => {
  it('should change a positive value into a negative', () => {
    expect(invertNumber(10000)).toEqual(-10000);
  });
  it('should change a large positive value into a negative', () => {
    expect(invertNumber(198287737)).toEqual(-198287737);
  });
  it('should change a negative value into a positive', () => {
    expect(invertNumber(-70000)).toEqual(70000);
  });
  it('should change a large negative value into a positive', () => {
    expect(invertNumber(-82794692)).toEqual(82794692);
  });
});
