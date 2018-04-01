import PropTypes from 'prop-types';
import { Component } from 'react';
import FileInput from 'react-simple-file-input';

class DragAndDropHolder extends Component {
  onLoad = event => {
    const { onLoad } = this.props;
    onLoad(JSON.parse(event.target.result));
  };

  render() {
    return <FileInput readAs="text" onLoad={this.onLoad} />;
  }
}

DragAndDropHolder.propTypes = {
  onLoad: PropTypes.func.isRequired,
};

export default DragAndDropHolder;
