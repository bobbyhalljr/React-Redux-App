import React from 'react';
import { connect } from 'react-redux';

const Coin = ({ coin }) => {
    return (
        <div>
            <h1></h1>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        coin: state.coin
    }
}

export default connect(mapStateToProps, {})(Coin);