export const VALUE = 'VALUE';
export const DIFF = 'DIFF';

export const ValueBinding = value => { // value 변경
  return {
    type: VALUE,
    value,
  };
}

export const DiffBinding = value => { // diff 변경
  return {
    type: DIFF,
    value,
  };
}
