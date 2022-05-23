import {useState} from 'react';
import './App.css';
import randColor from './Functions/randColor';

function App() {

  const [spalva, setSpalva] = useState('yellow');
  const katinukai = ['Pilkis', 'Murkis', 'Rainis'];
  const [kv, setKv] = useState();

  /*
  const mygtukas = () => {
    console.log('Aš gražus mygtukas')
    return mygtukoBrolis
  }

  const mygtukoBrolis = () => {
    console.log('Aš gražus mygtuko brolis')
  }
*/

const beArgumentu = () => {
  console.log('beArgumentu');
}

const suArgumentu = ka => {
  console.log('suArgumentu: ' + ka);
}

const keistiSpalva = () => {
  //const nauja = spalva === 'yellow' ? 'blue' : 'yellow'; //BLOGAAAI!!!
  //setSpalva(nauja);
  setSpalva(oldColor => oldColor === 'yellow' ? 'blue' : 'yellow');
  //console.log(spalva);
}

const addKv = () => {
  setKv(k => [...k, randColor()]);
}

  return (
    <div className="App">
      <header className="App-header">
        <h1 style={{color: spalva}}>State</h1>
        {
          katinukai.map((k, i) => <div key = {k}>{k}</div>)
        }
        <div className='kvc'>
        {
          kv.map((c, i) => <div className='kv' key = {i} style={(backgroundColor:c)}></div>)
        }
        </div>
        <button onClick={beArgumentu}>Be</button> 
        <button onClick={() => suArgumentu('labas')}>Su</button>
        <button onClick={keistiSpalva}>Kita spalva</button>
        <button onClick={addKv}>ADD[]</button>
      </header>
    </div>
  );
}

export default App;
//mygtukas()

//const [A, B] = [1, 2];
//const A = [1,2][0];
//const B = [1,2][0];
//state negalima keisti, pvz state++ yra labai blogai