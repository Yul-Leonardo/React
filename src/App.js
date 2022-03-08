import Nav from './components/Nav';
import Greeter from './components/Greeter';
import ChoiceBar from './components/ChoiceBar';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* <Greeter maxLength={20} />
      <Nav /> */}
      <ChoiceBar title="JavaScript" percent={37} />

    </div>
  );
}

export default App;
