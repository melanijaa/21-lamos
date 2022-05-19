import './App.css';

function App() {
  const mygtukas = () => {
    console.log('Aš gražus mygtukas')
  }

  return (
    <div className="App">
      <header className="App-header">
          <h1>State</h1>
          <button onClick={mygtukas}>Press me</button>
      </header>
    </div>
  );
}

export default App;