import './App.css';
import Square from "../components/Square"

function App() {
  const testVar = 'Kellon'

  return (
    <div className="App">
      <Square propVar={ testVar } />
    </div>
  );
}

export default App;
