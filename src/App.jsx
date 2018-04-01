import { Component } from 'react';
import Toolbar from 'material-ui/Toolbar';
import Typography from 'material-ui/Typography';
import AppBar from 'material-ui/AppBar';

import Table from './ComparationTable';
import Holder from './DragAndDropHolder';

class App extends Component {
  state = {
    performanceData: [],
  };

  handlePerformanceDataLoad = ({ data }) => this.setState({ performanceData: data });

  render() {
    const { performanceData } = this.state;
    return (
      <div>
        <AppBar position="static" color="default">
          <Toolbar>
            <Typography variant="title" color="inherit">
              Lighthouse Comparer
            </Typography>
          </Toolbar>
        </AppBar>
        <Table performanceData={performanceData} />
        <Holder onLoad={this.handlePerformanceDataLoad} />
      </div>
    );
  }
}

export default App;
