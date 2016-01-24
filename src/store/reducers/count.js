import C from '../../constants';

const initialState = {
    number: 1
};

export default (state = initialState, action) => {
    if (action.type === C.INCREASE) {
        return {number: state.number + action.amount};
    }
    else if (action.type === C.DECREASE) {
        return {number: state.number - action.amount};
    }
    return state;
};
