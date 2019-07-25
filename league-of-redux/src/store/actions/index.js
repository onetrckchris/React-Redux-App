export const FETCHING_START = 'FETCHING_START';
export const FETCHING_SUCCESS = 'FETCHING_SUCCESS';
export const FETCHING_FAILURE = 'FETCHING_FAILURE';

const getSummoner = (summonerName) => (dispatch) => {
    dispatch({ type: FETCHING_START, payload: summonerName });
    // axios.get()
}