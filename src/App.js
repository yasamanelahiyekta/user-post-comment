import { useLocation } from 'react-router-dom';
import './App.css';
import Router from './Redux/Router';
import Header from './components/header/Header';
import Bread from './components/header/bread/Bread';

function App() {
  const { pathname } = useLocation()
  const bread = pathname.split("/")
  return (
    <div className="App">
      <Header />
      <Bread bread={ bread } />
      <Router />
    </div>
  );
}

export default App;
