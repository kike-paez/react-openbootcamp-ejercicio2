import logo from './logo.svg';
import './App.css';
import ClockF from './components/clockF';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ClockF></ClockF>
      </header>
    </div>
  );
}

export default App;
