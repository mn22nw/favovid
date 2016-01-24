import C from '../constants';

function increase(n) {
  return {
    type: C.INCREASE,
    amount: n
  };
}

function decrease(n) {
  return {
    type: C.DECREASE,
    amount: n
  };
}

export default { increase, decrease };
