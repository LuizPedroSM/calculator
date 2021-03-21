import { createContext, useContext, useReducer, useEffect } from 'react';
import PropTypes from 'prop-types';
import HistoryReducer from '~/reducers/historyReducer';

const initialState = {
  history: HistoryReducer(),
};

const localState = JSON.parse(localStorage.getItem('history'));

const MainReducer = (state, action) => ({
  history: HistoryReducer(state.history, action),
});

export const StateContext = createContext();

export const StateProvider = ({ children }) => {
  const [state, dispatch] = useReducer(MainReducer, localState || initialState);

  useEffect(() => {
    localStorage.setItem('history', JSON.stringify(state));
  }, [state]);

  return (
    <StateContext.Provider value={[state, dispatch]}>
      {children}
    </StateContext.Provider>
  );
};

StateProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export const useStateValue = () => useContext(StateContext);
