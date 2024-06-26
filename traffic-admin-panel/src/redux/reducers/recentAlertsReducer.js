import { FETCH_RECENT_ALERTS } from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_RECENT_ALERTS:
            return [...action.payload];
        default:
            return state;
    }
};
