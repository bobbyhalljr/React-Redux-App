import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { getCoin } from '../actions';
import Coin from '../components/Coin';

const Coins = ({ getCoin, coin, isFetching, error }) => {
    useEffect(() => {
        // run action creator when component mounts
        getCoin();
    }, [getCoin])

    if(isFetching){
        return <h3>Fetching Coin Data For You...</h3>
    }

    return (
        <div>
            <ul>
                
                {coin.map(item => {
                    return (
                    <>
                        <li className='coin' key={item.id}>{item.symbol}</li>
                        <h3>{item.name}</h3>
                        <h4>{item.price}</h4>
                    </>
                    )
                })}
            </ul>
        </div>
    )
}

const mapStateToProps = state => {
    console.log(state.coin)
    return {
        coin: state.coin,
        isFetching: state.isFetching,
        error: state.error
    }
}

export default connect(mapStateToProps, { getCoin })(Coins)