import PropTypes from 'prop-types';
import Paper from 'material-ui/Paper';
import ReactEcharts from 'echarts-for-react';
import orderBy from 'lodash/fp/orderBy';

const buildOptions = performanceData => ({
  title: {
    text: 'Performance Chart',
  },
  tooltip: {
    trigger: 'axis',
  },
  xAxis: [
    {
      type: 'category',
      data: performanceData.map(data => data.webPage),
    },
  ],
  yAxis: [
    {
      type: 'value',
    },
  ],
  series: [
    {
      name: 'score',
      type: 'bar',
      data: performanceData.map(data => data.score),
    },
  ],
});

const orderByScore = orderBy(['score'], ['desc']);

function ComparationChart({ performanceData }) {
  return (
    <Paper>
      <ReactEcharts option={buildOptions(orderByScore(performanceData))} theme="blue" />
    </Paper>
  );
}

ComparationChart.propTypes = {
  performanceData: PropTypes.arrayOf(
    PropTypes.shape({
      webPage: PropTypes.string.isRequired,
      score: PropTypes.number.isRequired,
      firstMeaningfulPaint: PropTypes.number.isRequired,
      firstInteractive: PropTypes.number.isRequired,
      consistentlyInteractive: PropTypes.number.isRequired,
      speedIndexMetric: PropTypes.number.isRequired,
      estimatedInputLatency: PropTypes.number.isRequired,
    }),
  ),
};

ComparationChart.defaultProps = {
  performanceData: [],
};

export default ComparationChart;
