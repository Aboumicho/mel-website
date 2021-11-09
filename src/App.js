import logo from './logo.svg';
import './App.css';
import './styles/Header.css'
import Tarifs from './components/Tarifs';
import Header from './components/Header';
import { createStore, applyMiddleware } from 'redux';
import Thunk from 'redux-thunk';
import { Provider } from 'react-redux';
import reducers from './reducers';
import RendezVous from './components/RendezVous';
import { Provider as AlertProvider } from 'react-alert'
import AlertTemplate from 'react-alert-template-basic'
import options from './components/Alert-Options'

const store = createStore(reducers, {}, applyMiddleware(Thunk));

function App() {
  
  return (
    <Provider store={store}>
      <AlertProvider template={AlertTemplate} {...options}>
    <div className="App">
      <Header />
      <Tarifs />
      <RendezVous />
    </div>
    </AlertProvider>
    </Provider>
  );
}

export default App;
