import { useStateValue } from '~/contexts/StateContext';
import Button from '../Button';
import './styles.css';

function History() {
  const [state, dispatch] = useStateValue();

  const clearHistory = () => {
    dispatch({ type: 'clearHistory' });
  };

  return (
    <div className="box history">
      <div className="history-header">
        <span>History</span>
        <Button onClick={() => clearHistory()}>Clean</Button>
      </div>
      <ul className="history-list">
        {state.history.history.map((item, index) => (
          <li key={`${item + index}`} className="history-item">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default History;
