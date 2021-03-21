import Button from '../Button';

import './styles.css';

function Calculator() {
  return (
    <div className="box calculator">
      <div className="calculator-display">
        <input type="number" className="calculator-input" />
      </div>
      <div className="calculator-keyboard">
        <Button>/</Button>
        <Button>*</Button>
        <Button>-</Button>
        <Button>+</Button>

        <Button>7</Button>
        <Button>8</Button>
        <Button>9</Button>

        <Button>4</Button>
        <Button>5</Button>
        <Button>6</Button>

        <Button>1</Button>
        <Button>2</Button>
        <Button>3</Button>

        <Button className="k-0">0</Button>
        <Button className="k-c">C</Button>
        <Button className="k-r">=</Button>
      </div>
    </div>
  );
}

export default Calculator;
