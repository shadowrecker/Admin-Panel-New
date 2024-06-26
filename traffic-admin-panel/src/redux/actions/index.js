import axios from 'axios';
import { FETCH_OVERVIEW_STATS, FETCH_RECENT_ALERTS, FETCH_VIDEO_HISTORY } from './actionTypes';

export const fetchOverviewStats = () => async dispatch => {
    const response = await axios.get('/api/stats/overview');
    dispatch({ type: FETCH_OVERVIEW_STATS, payload: response.data });
};

export const fetchRecentAlerts = () => async dispatch => {
    const response = await axios.get('/api/alerts/recent');
    dispatch({ type: FETCH_RECENT_ALERTS, payload: response.data });
};

export const fetchVideoHistory = () => async dispatch => {
    const response = await axios.get('/api/videos/history');
    dispatch({ type: FETCH_VIDEO_HISTORY, payload: response.data });
};

// Add other actions here
