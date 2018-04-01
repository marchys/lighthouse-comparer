import quantileValueAt from '../quantileValueAt';

describe('calculateLighthouseScore', () => {
  it('shouldCalculate Quantile value', () => {
    expect(quantileValueAt(4000, 1600, 2500)).toBe(0.8216573086886052);
    expect(quantileValueAt(10000, 1700, 12000)).toBe(0.4083078932573967);
    expect(quantileValueAt(5500, 1250, 8000)).toBe(0.29662927610222645);
  });
});
