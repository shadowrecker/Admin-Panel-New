import { FETCH_VIDEO_HISTORY } from '../actions/actionTypes';

const initialState = [];

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_VIDEO_HISTORY:
            return [...action.payload];
        default:
            return state;
    }
};
