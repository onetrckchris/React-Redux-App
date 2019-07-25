import axios from 'axios';

export const FETCHING_SUMMONER_START = 'FETCHING_SUMMONER_START';
export const FETCHING_SUMMONER_SUCCESS = 'FETCHING_SUMMONER_SUCCESS';
export const FETCHING_SUMMONER_FAILURE = 'FETCHING_SUMMONER_FAILURE';

export const getSummoner = (summonerName) => (dispatch) => {
    dispatch({ type: FETCHING_SUMMONER_START });
    axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${summonerName}?api_key=${process.env.REACT_APP_LOL_API_KEY}`)
        .then(response => {
            dispatch({ type: FETCHING_SUMMONER_SUCCESS, payload: response.data });
        })
        .catch(error => {
            dispatch({ type: FETCHING_SUMMONER_FAILURE });
        })
}

export const FETCHING_MASTERY_START = 'FETCHING_MASTERY_START';
export const FETCHING_MASTERY_SUCCESS = 'FETCHING_MASTERY_SUCCESS';
export const FETCHING_MASTERY_FAILURE = 'FETCHING_MASTERY_FAILURE';

export const getMastery = (summonerId) => (dispatch) => {
    dispatch({ type: FETCHING_MASTERY_START });
    axios.get(`https://cors-anywhere.herokuapp.com/https://na1.api.riotgames.com/lol/champion-mastery/v4/champion-masteries/by-summoner/${summonerId}?api_key=${process.env.REACT_APP_LOL_API_KEY}`)
        .then(response => {
            console.log(response.data)
            dispatch({ type: FETCHING_MASTERY_SUCCESS, payload: response.data });
        })
        .catch(error => {
            console.log(error)
            dispatch({ type: FETCHING_MASTERY_FAILURE });
        })
}