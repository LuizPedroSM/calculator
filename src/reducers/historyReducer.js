const initialState = {
  history: [],
};

export default (state = initialState, action = {}) => {
  switch (action.type) {
    case 'addHistory': {
      const history = [...state.history];
      history.push(action.history);
      return { ...state, history };
    }
    case 'clearHistory': {
      return { ...state, history: [] };
    }
    default:
      return state;
  }
};
