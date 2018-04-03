import PropTypes from 'prop-types';
import { withStyles } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

const styles = theme => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
  table: {
    minWidth: 700,
  },
});

function ComparationTable(props) {
  const { classes, performanceData } = props;
  return (
    <Paper className={classes.root}>
      <Table className={classes.table}>
        <TableHead>
          <TableRow>
            <TableCell>Webpage</TableCell>
            <TableCell>Score</TableCell>
            <TableCell numeric>First meaningful paint</TableCell>
            <TableCell numeric>First interactive</TableCell>
            <TableCell numeric>Consistently interactive</TableCell>
            <TableCell numeric>Speed index metric</TableCell>
            <TableCell numeric>Estimated Input Latency</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {performanceData.map(n => (
            <TableRow key={n.webPage}>
              <TableCell>{n.webPage}</TableCell>
              <TableCell>{n.score}</TableCell>
              <TableCell numeric>{n.firstMeaningfulPaint}</TableCell>
              <TableCell numeric>{n.firstInteractive}</TableCell>
              <TableCell numeric>{n.consistentlyInteractive}</TableCell>
              <TableCell numeric>{n.speedIndexMetric}</TableCell>
              <TableCell numeric>{n.estimatedInputLatency}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Paper>
  );
}

ComparationTable.propTypes = {
  classes: PropTypes.object.isRequired, // eslint-disable-line react/forbid-prop-types
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

ComparationTable.defaultProps = {
  performanceData: [],
};

export default withStyles(styles)(ComparationTable);
