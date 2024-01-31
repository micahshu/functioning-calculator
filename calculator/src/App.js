import './App.css';
import { useState } from 'react'

function App() {
  const [currentNumber, setCurrentNumber] = useState()
  console.log(currentNumber)

  function numberButton(input) {
    const value = currentNumber
    setCurrentNumber(value + input)
  }

  return (
    <div className="App">
      <div className="wrapper">

        <div className='results'>{currentNumber}</div>
        <div className='clear'></div>
        <div className='changeSign'></div>
        <div className="period"></div>
        <div className="equels"></div>

        <div className='percent'></div>
        <div className='divide'></div>
        <div className="multiplication"></div>
        <div className="minus"></div>
        <div className="plus"></div>

        <div className="one"><button onClick={() => numberButton('1')}>1</button></div>
        <div className="two"><button onClick={() => numberButton('2')}>2</button></div>
        <div className="three"><button onClick={() => numberButton('3')}>3</button></div>
        <div className="four"></div>
        <div className="five"></div>
        <div className="six"></div>
        <div className="seven"></div>
        <div className="eight"></div>
        <div className="nine"></div>

      </div>
    </div>
  );
}

export default App;
