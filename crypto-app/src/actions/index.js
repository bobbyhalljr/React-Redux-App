import axios from 'axios';

export const FETCHING_COIN_START = 'FETCHING_COIN_START';
export const FETCHING_COIN_SUCCESS = 'FETCHING_COIN_SUCCESS';
export const FETCHING_COIN_FAILURE = 'FETCHING_COIN_FAILURE';

export const getCoin = () => dispatch => {
    dispatch({ type: FETCHING_COIN_START });
    
    axios.get('https://api.coinpaprika.com/v1/tickers')
    .then(res => {
        // console.log(res.data)
        dispatch({ type: FETCHING_COIN_SUCCESS, payload: res.data })
    })
    .catch(error => {
        dispatch({ type: FETCHING_COIN_FAILURE, payload: console.log(error.response.message) })
    })
}