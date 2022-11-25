import logo from './logo.svg';
import './css/App.css';
//components
import Navbar from "./components/navbar/Navbar";
import Nosotros from "./components/Nosotros";
  


function App() {
  return (
    <div>
<Navbar />
<Nosotros/>
<div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
    </div>
    
  );
}

export default App;
