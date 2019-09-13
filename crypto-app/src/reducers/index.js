// Import action types 
import { FETCHING_COIN_START, FETCHING_COIN_SUCCESS } from '../actions';

// create initial state
const initialState = {
    coin: [
        {
            id: null,
            name: 'BitCoin',
            symbol: 'BTC',
            rank: 1,
            is_new: false,
            is_active: true,
            type:'coin'
        },
    ],
    isFetching: false,
    error: ''
}

// setup reducer function
export const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCHING_COIN_START:
            return {
                ...state,
                isFetching: true,
                error: ''
            };
        case FETCHING_COIN_SUCCESS:
            return {
                ...state,
                isFetching: false,
                coin: action.payload
            }
        default: 
        return state;
    }
}