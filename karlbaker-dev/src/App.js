import logo from './logo.svg';
import './App.css';
import HeaderBar from './components/HeaderBar/HeaderBar';

function App() {
  return (
    <div className="App">
      <HeaderBar></HeaderBar>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          In the works! Come back soon.
        </p>
      </header>
    </div>
  );
}

export default App;
