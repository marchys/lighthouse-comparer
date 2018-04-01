import partial from 'lodash/fp/partial';
import pipe from 'lodash/fp/pipe';
import multiply from 'lodash/fp/multiply';

import weightedAverage from './numbers/weightedAverage';
import quantileValueAt from './numbers/quantileValueAt';

const firstMeaningfulPaintQuantile = partial(quantileValueAt, [4000, 1600]);
const firstInteractiveQuantile = partial(quantileValueAt, [10000, 1700]);
const consistentlyInteractiveQuantile = partial(quantileValueAt, [10000, 1700]);
const speedIndexMetricQuantile = partial(quantileValueAt, [5500, 1250]);
const estimatedInputLatencyQuantile = partial(quantileValueAt, [100, 50]);

const toQuantile = ({
  firstMeaningfulPaint,
  firstInteractive,
  consistentlyInteractive,
  speedIndexMetric,
  estimatedInputLatency,
}) => ({
  firstMeaningfulPaint: firstMeaningfulPaintQuantile(firstMeaningfulPaint),
  firstInteractive: firstInteractiveQuantile(firstInteractive),
  consistentlyInteractive: consistentlyInteractiveQuantile(consistentlyInteractive),
  speedIndexMetric: speedIndexMetricQuantile(speedIndexMetric),
  estimatedInputLatency: estimatedInputLatencyQuantile(estimatedInputLatency),
});

const addWeights = ({
  firstMeaningfulPaint,
  firstInteractive,
  consistentlyInteractive,
  speedIndexMetric,
  estimatedInputLatency,
}) => ({
  firstMeaningfulPaint: { weight: 5, value: firstMeaningfulPaint },
  firstInteractive: { weight: 5, value: firstInteractive },
  consistentlyInteractive: { weight: 5, value: consistentlyInteractive },
  speedIndexMetric: { weight: 1, value: speedIndexMetric },
  estimatedInputLatency: { weight: 1, value: estimatedInputLatency },
});

export default pipe(toQuantile, addWeights, weightedAverage, multiply(100));
