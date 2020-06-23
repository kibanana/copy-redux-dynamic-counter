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

export const VARIATION = 'VARIATION';
export const variation = diff => {
  return {
    type: VARIATION,
    value: diff,
  };
};
