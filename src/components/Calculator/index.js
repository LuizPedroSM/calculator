import { useState } from 'react';
import { useStateValue } from '~/contexts/StateContext';
import Button from '../Button';

import './styles.css';

function Calculator() {
  const [input, setInput] = useState('0');
  const [, dispatch] = useStateValue();

  const addInput = (s) => {
    const regex = new RegExp('[0-9-+/*.]');
    if (regex.test(s) && input !== '0') {
      setInput(`${input}${s}`);
    } else {
      setInput(s);
    }
  };

  const result = () => {
    /* eslint no-eval: 0 */
    const r = Number(eval(input)).toFixed(2);
    dispatch({ type: 'addHistory', history: `${input} = ${r}` });
    setInput(r);
  };

  return (
    <div className="box calculator">
      <div className="calculator-display">
        <input
          type="text"
          className="calculator-input"
          pattern="[0-9\/]*"
          value={input}
          readOnly
        />
      </div>
      <div className="calculator-keyboard">
        <Button onClick={() => addInput('/')}>/</Button>
        <Button onClick={() => addInput('*')}>*</Button>
        <Button onClick={() => addInput('-')}>-</Button>
        <Button onClick={() => addInput('+')}>+</Button>

        <Button onClick={() => addInput('7')}>7</Button>
        <Button onClick={() => addInput('8')}>8</Button>
        <Button onClick={() => addInput('9')}>9</Button>

        <Button onClick={() => addInput('4')}>4</Button>
        <Button onClick={() => addInput('5')}>5</Button>
        <Button onClick={() => addInput('6')}>6</Button>

        <Button onClick={() => addInput('1')}>1</Button>
        <Button onClick={() => addInput('2')}>2</Button>
        <Button onClick={() => addInput('3')}>3</Button>

        <Button className="k-0" onClick={() => addInput('0')}>
          0
        </Button>
        <Button className="k-d" onClick={() => addInput('.')}>
          .
        </Button>
        <Button className="k-c" onClick={() => setInput(`0`)}>
          C
        </Button>
        <Button className="k-r" onClick={() => result()}>
          =
        </Button>
      </div>
    </div>
  );
}

export default Calculator;
