import logo from './logo.svg';
import './App.css';
// import components here
import Home from './containers/Home'

// this represents the main app, which will hold each of
// the three sections
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Header</h1>
      </header>
      <Home />
    </div>
  );
}

export default App;
