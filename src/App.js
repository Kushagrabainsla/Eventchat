import './App.css';
import Header from './components/Header';
import Home from './components/Home';
import Bottom from './components/Bottom';

function App() {
  return (
    <div className='container'>
      <Header/>
      <Home/>
      <Bottom/>
    </div>
  );
}

export default App;
