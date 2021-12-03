import './App.css';
import Hello from './hello/Hello'

function App() {
  const onHello = (e) => {
    console.log(e);
  }

  return (
    <div className="App">
      <Hello onHello={onHello} />
    </div>
  );
}

export default App;
