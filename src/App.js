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

const store = createStore(reducers, {}, applyMiddleware(Thunk));

function App() {
  
  return (
    <Provider store={store}>
    <div className="App">
      <Header />
      <Tarifs />
      <RendezVous />
    </div>
    </Provider>
  );
}

export default App;
