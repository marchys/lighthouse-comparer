import calculateScore from '../calculateLighthouseScore';

describe('calculateLighthouseScore', () => {
  it('should calculate lightHouse score', () => {
    const data = {
      webPage: 'pmt',
      firstMeaningfulPaint: 2500,
      firstInteractive: 5000,
      consistentlyInteractive: 5000,
      speedIndexMetric: 3000,
      estimatedInputLatency: 70,
    };
    expect(calculateScore(data)).toBe(81.33470272812954);
  });
});
