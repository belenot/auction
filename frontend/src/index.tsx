import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';
import { Provider } from 'react-redux';
import { rootReducer } from './reducers';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import { Container, ThemeProvider } from '@material-ui/core';
import { rootTheme } from './styles';
import './index.css'

const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    (window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__()
  )
);

window.onload = () => {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={rootTheme}>
        <Container>
          <App />
        </Container>
      </ThemeProvider>
    </Provider>,
    document.querySelector('#root')
  );
}