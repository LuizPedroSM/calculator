import { Calculator, History } from '~/components';
import { StateProvider } from '~/contexts/StateContext';
import '~/App.css';

function App() {
  return (
    <StateProvider>
      <div className="container grid">
        <Calculator />
        <History />
      </div>
    </StateProvider>
  );
}

export default App;
