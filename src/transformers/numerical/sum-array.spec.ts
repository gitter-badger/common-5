import { sumArray } from '.';

describe('Sum Array Function', () => {
  it('Should give a correct sum of all numeric items in an array', () => {
    expect(sumArray([1, 2, 3, 4, 5, 6, 7, 8, 9])).toEqual(45);
  });
  it('Should give a correct sum of all numeric items in an array including negative numbers', () => {
    expect(sumArray([6, 2, 15, 16, -23, 15, -9, 154])).toEqual(176);
  });
});
