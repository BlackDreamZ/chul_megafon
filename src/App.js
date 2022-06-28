import './App.css';
import header from './components/header/header.jsx';
import main from './components/main/main.jsx';

function App() {
  return (
    <div className="App">
      {header()}
      {main()}
    </div>
  );
}

export default App;
