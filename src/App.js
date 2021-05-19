import logo from './logo.svg';
import './App.css';
// import components here
import Home from './containers/Home';
import Header from './component/Header';

// this represents the main app, which will hold each of
// the three sections
function App() {
  return (
    <div className="App">
      <Header />
      <Home />
    </div>
  );
}

export default App;
