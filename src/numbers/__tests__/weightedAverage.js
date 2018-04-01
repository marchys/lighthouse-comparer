import weightedAverage from '../weightedAverage';

describe('weightedAverage', () => {
  it('should calculate the weighted average', () => {
    const data = [{ value: 32, weight: 5 }, { value: 44, weight: 3 }, { value: 11, weight: 2 }];
    expect(weightedAverage(data)).toBe(31.4);
  });
});
