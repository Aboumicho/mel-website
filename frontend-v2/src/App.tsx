import React from 'react';
import logo from './logo.svg';
import './App.scss';
import ApolloConfig from './Apollo';
import { createStore, applyMiddleware } from 'redux';
import reducers from './reducers';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import Header from './components/Header';
import Form from './pages/form';
import Visible from './components/Visible';
import { ScheduleApp } from './ScheduleApp';

const store = createStore(reducers, {}, applyMiddleware(Thunk));

function App() {

  return (
<ApolloConfig>
  <Provider store={store}>
    <Header/>
    <ScheduleApp/>
  </Provider>
    </ApolloConfig>
  );
}

export default App;
