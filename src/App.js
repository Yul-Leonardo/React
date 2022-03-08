import Nav from './components/Nav';
import Greeter from './components/Greeter';
import './App.css';


function App() {
  return (
    <div className="App">
      <Greeter maxLength={20} />
      <Nav />

    </div>
  );
}

export default App;
