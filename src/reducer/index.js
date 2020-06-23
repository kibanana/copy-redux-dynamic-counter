import { VARIATION } from '../actions'; 

const counterReducer = (state = { value: 0, }, action) => {
  switch (action.type) {
    case VARIATION:
      return Object.assign({}, state, {
        value: state.value + action.value,
      });
    default:
      return state;
  }
};

export default counterReducer;
