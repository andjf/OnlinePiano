import './App.css';
import {Piano} from './components/Piano.js';

function App() {
  return (
    <div>
      <header className="App-header">
        <h1 className="theTitle">Play <i>Something.</i></h1>
        <Piano />
        <h3 className="subheading">Use the bottom two rows of letters</h3>
      </header>
    </div>
  );
}

export default App;