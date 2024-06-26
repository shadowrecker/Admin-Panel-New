import { FETCH_OVERVIEW_STATS } from '../actions/actionTypes';

const initialState = {
    videosAnalyzed: 0,
    detectedAnomalies: 0,
    trafficDensity: 0,
    systemPerformance: 'Good'
};

export default (state = initialState, action) => {
    switch (action.type) {
        case FETCH_OVERVIEW_STATS:
            return { ...state, ...action.payload };
        default:
            return state;
    }
};
