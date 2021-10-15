import './App.css';
import Accordion from "./components/MainPanel"
import Navbar from './components/Background';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Navbar />
      <Accordion/>
      <Switch>
        <Route path= '/main' components={Accordion}/>
      </Switch>
    </div>
    </Router>
  );
}

export default App;
