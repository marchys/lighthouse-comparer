import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { createMuiTheme } from 'material-ui/styles';
import blue from 'material-ui/colors/blue';

import App from './App';

const theme = createMuiTheme({
  palette: {
    primary: blue,
  },
});

const root = document.getElementById('root');
const load = () =>
  render(
    <AppContainer>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
    </AppContainer>,
    root,
  );

// This is needed for Hot Module Replacement
if (module.hot) {
  module.hot.accept('./App', load);
}

load();
