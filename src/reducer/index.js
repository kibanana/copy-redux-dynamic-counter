import { combineReducers } from 'redux';
import { VALUE, DIFF } from '../actions';

const valueStore = (state = { value: 0 }, action) => {
  switch (action.type) {
    case VALUE:
      return {
        ...state,
        value: action.value,
      };
    default:
      return state;
  }
};

const diffStore = (state = { diff: 1 }, action) => {
  switch (action.type) {
    case DIFF:
      return {
        ...state,
        diff: action.value,
      }
    default:
      return state;
  }
};

export default combineReducers({
  valueStore,
  diffStore,
});
