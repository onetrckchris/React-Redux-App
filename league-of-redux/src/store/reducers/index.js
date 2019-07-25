import { 
    FETCHING_SUMMONER_START, 
    FETCHING_SUMMONER_SUCCESS,
    FETCHING_SUMMONER_FAILURE,
    FETCHING_MASTERY_START,
    FETCHING_MASTERY_SUCCESS,
    FETCHING_MASTERY_FAILURE
} from '../actions';

const initialState = {
    // Fix the naming on this.
    isFetching: false,
    error: '',
    summoner: null,
    isFetchingMastery: false,
    masteryError: '',
    mastery: null
}

export const reducer = (state = initialState, action) => {
    switch(action.type) {
        case FETCHING_SUMMONER_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            }
        case FETCHING_SUMMONER_SUCCESS:
            return {
                ...state,
                isFetching: false,
                error: '',
                summoner: action.payload,
                mastery: null
            }
        case FETCHING_SUMMONER_FAILURE:
            return {
                ...state,
                isFetching: false,
                error: action.payload,
                summoner: {
                    name: "That summoner doesn't exist!"
                }
            }
        case FETCHING_MASTERY_START:
            return {
                ...state,
                isFetchingMastery: true,
                masteryError: ''
            }
        case FETCHING_MASTERY_SUCCESS:
            let shortenedMasteryArray = [];

            for(let i = 0; i < 5; i++) {
                shortenedMasteryArray.push(action.payload[i]);
            }

            return {
                ...state,
                isFetchingMastery: false,
                masteryError: '',
                mastery: shortenedMasteryArray
            }
        case FETCHING_MASTERY_FAILURE:
            return {
                ...state,
                isFetchingMastery: false,
                masteryError: action.payload,
                mastery: null
            }
        default:
            return state;
    }
}