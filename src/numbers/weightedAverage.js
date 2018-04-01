import map from 'lodash/fp/map';
import pipe from 'lodash/fp/pipe';
import compose from 'lodash/fp/compose';
import reduce from 'lodash/fp/reduce';

import add from 'lodash/fp/add';
import divide from 'lodash/fp/divide';
import multiply from 'lodash/fp/multiply';

const applyToFunc = (...fns) => value => map(fn => fn(value), fns);

const multiplyWightValue = ({ weight, value }) => multiply(weight, value);

const divideResult = ([totalValue, totalWeights]) => divide(totalValue, totalWeights);

const addWeights = (acc, { weight }) => add(acc, weight);

const multiplyAndAdd = compose(reduce(add, 0), map(multiplyWightValue));

export default pipe(applyToFunc(multiplyAndAdd, reduce(addWeights, 0)), divideResult);
