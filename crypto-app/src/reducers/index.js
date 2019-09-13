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
        }
    ],
    quotes: {
        USD: {
            ath_date: "2017-12-17T12:19:00Z",
            ath_price: 20089,
            market_cap: 186308609136,
            market_cap_change_24h: 2.56,
            percent_change_1h: -0.31,
            percent_change_1y: 61.99,
            percent_change_7d: -3.16,
            percent_change_12h: 0.46,
            percent_change_24h: 2.55,
            percent_change_30d: -1.99,
            percent_from_price_ath: -48.28,
            price: 10389.22895499,
            volume_24h: 12806406074.843,
            volume_24h_change_24h: 1.29,
        }
    },
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
                coin: action.payload,
            }
        default: 
        return state;
    }
}