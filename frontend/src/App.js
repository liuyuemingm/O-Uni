import './App.css';
import Accordion from "./components/MainPanel"
import Navbar from './components/Background';
import LogB from './components/Sample';
function App() {
  return (
    <div className="App">
      <LogB />
      <Accordion/>
    </div>
  );
}

export default App;
