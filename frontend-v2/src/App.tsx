import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloConfig from './Apollo';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Header from './components/Header';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

function App() {
  return (
<ApolloConfig>
  <Provider store={store}>
    <Header/>
  <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
      </Provider>
    </ApolloConfig>
  );
}

export default App;
