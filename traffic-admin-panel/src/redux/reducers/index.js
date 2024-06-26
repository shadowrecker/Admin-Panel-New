import { combineReducers } from 'redux';
import overviewStatsReducer from './overviewStatsReducer';
import recentAlertsReducer from './recentAlertsReducer';
import videoHistoryReducer from './videoHistoryReducer';
// Add other reducers here

export default combineReducers({
    overviewStats: overviewStatsReducer,
    recentAlerts: recentAlertsReducer,
    videoHistory: videoHistoryReducer,
    // Add other reducers here
});
