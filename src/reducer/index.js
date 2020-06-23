import { INCREMENT, DECREMENT, SET_DIFF } from '../actions';

const counter = (state = { value: 0, diff: 1 }, action) => {
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value + state.diff,
      });
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value - state.diff,
      });
    case SET_DIFF:
      return Object.assign({}, state, {
        diff: action.value,
      });
    default:
      return state;
  }
};

export default counter;
