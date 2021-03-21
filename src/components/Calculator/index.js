function Calculator() {
  return (
    <div className="box calculator">
      <div className="display">
        <input type="number" />
      </div>
      <div className="keyboard">
        <button type="button">C</button>
        <button type="button">/</button>
        <button type="button">*</button>
        <button type="button">-</button>
        <button type="button">+</button>

        <button type="button">7</button>
        <button type="button">8</button>
        <button type="button">9</button>

        <button type="button">4</button>
        <button type="button">5</button>
        <button type="button">6</button>

        <button type="button">1</button>
        <button type="button">2</button>
        <button type="button">3</button>

        <button type="button">0</button>
        <button type="button">=</button>
      </div>
    </div>
  );
}

export default Calculator;
