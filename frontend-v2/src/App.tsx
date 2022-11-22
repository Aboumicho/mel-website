import React from 'react';
import logo from './logo.svg';
import './App.css';
import ApolloConfig from './Apollo';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Tarifs from './components/Tarifs';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

function App() {
  return (
<ApolloConfig>
  <Provider store={store}>
    <Header/>
    <Tarifs/>
  <div className="App">
    
      
    </div>
      </Provider>
    </ApolloConfig>
  );
}

export default App;
