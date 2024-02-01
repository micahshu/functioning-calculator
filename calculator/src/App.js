import './App.css';
import { useState } from 'react'

function App() {
  const [valueOne, setValueOne] = useState(0)
  const [valueTwo, setValueTwo] = useState(null)

  const [ operation, setOperation] = useState(null)
  const [ displayNumber, setDisplayNumber] = useState(0)

  
  function numberButton(input) {
    
    if (displayNumber === 0) {
      setDisplayNumber(input)
      setValueOne(input)
    } else {
      setDisplayNumber(valueOne + input)
      setValueOne(valueOne + input)
      
    }
  }

  function operatorButton(input) {
    setOperation(input)
    setValueTwo(valueOne)
    setDisplayNumber(0)

    setValueOne(0)
    equalsButton(operation, valueTwo, valueOne)
    }

    function equalsButton(operation, valueTwo, valueOne){
        const numTwo = Number(valueTwo)
        const numOne = Number(valueOne)
        let result
      switch (operation) {
        case 'divide':
          result = numTwo / numOne
          if (valueTwo = null){
            setDisplayNumber('what')

          } else {
            setDisplayNumber(result)

          }
          setDisplayNumber(result)
          setValueOne(0)
          setValueTwo(result)
          break
        case 'multiply':
          result = numTwo * numOne
          setDisplayNumber(result)
          setValueOne(0)
          setValueTwo(result)

          break
        case 'minus':
          result = numTwo - numOne

          setDisplayNumber(result)
          setValueOne(0)
          setValueTwo(result)

          break
        // …
        case 'plus':
          result = numTwo + numOne

          setDisplayNumber(result)
          setValueOne(0)
          setValueTwo(result)
          break
        default:
          setDisplayNumber('poop')
      }
    }
  

  return (
    <div className="App">
      <div className="wrapper">

        <div className='results'>{displayNumber}</div>
        <div className='clear'></div>
        <div className='changeSign'></div>
        <div className="period"></div>
        <div className="equals"><button onClick={() => equalsButton(operation, valueTwo, valueOne)}>=</button></div>

        <div className='percent'></div>

        <div className='divide'><button onClick={() => operatorButton('divide')}>/</button></div>
        <div className="multiply"><button onClick={() => operatorButton('multiply')}>x</button></div>
        <div className="minus"><button onClick={() => operatorButton('minus')}>-</button></div>
        <div className="plus"><button onClick={() => operatorButton('plus')}>+</button></div>


        <div className="one"><button onClick={() => numberButton('1')}>1</button></div>
        <div className="two"><button onClick={() => numberButton('2')}>2</button></div>
        <div className="three"><button onClick={() => numberButton('3')}>3</button></div>
        <div className="four"><button onClick={() => numberButton('4')}>4</button></div>
        <div className="five"><button onClick={() => numberButton('5')}>5</button></div>
        <div className="six"><button onClick={() => numberButton('6')}>6</button></div>
        <div className="seven"><button onClick={() => numberButton('7')}>7</button></div>
        <div className="eight"><button onClick={() => numberButton('8')}>8</button></div>
        <div className="nine"><button onClick={() => numberButton('9')}>9</button></div>

      </div>
    </div>
  );
}

export default App;
