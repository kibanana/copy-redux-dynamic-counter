// export const VALUE = 'VALUE';
// export const DIFF = 'DIFF';

// export const ValueBinding = value => {
//   return {
//     type: VALUE,
//     value,
//   };
// }

// export const DiffBinding = value => {
//   return {
//     type: DIFF,
//     value,
//   };
// }

export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const SET_DIFF = 'SET_DIFF';

export const increment = () => {
  return {
    type: INCREMENT,
  };
}

export const decrement = () => {
  return {
    type: DECREMENT,
  };
}

export const setDiff = (value) => {
  return {
    type: SET_DIFF,
    value,
  };
}
