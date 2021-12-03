import Hello from './hello/Hello'

function App() {
  const onHello = (e) => console.log(e);

  return <Hello onHello={onHello} />;
}

export default App;
