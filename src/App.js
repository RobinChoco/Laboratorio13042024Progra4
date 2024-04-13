import logo from './logo.svg';
import './App.css';
import ClaseDatos from './Components/claseDatos';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <body>
        <div className='App App-header'>
          <h1>DATOS DATOS</h1>
          <ClaseDatos />
        </div>
      </body>
    </div>
  );
}

export default App;
