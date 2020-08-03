import React, { useEffect, useDebugValue } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Tag, Button, Statistic, Descriptions, Row, Skeleton } from 'antd';


import { getCoin } from '../actions';
import Coin from '../components/Coin';

const Coins = ({ getCoin, coin, quotes, USD, isFetching, error }) => {
    useEffect(() => {
        // run action creator when component mounts
        getCoin();
    }, [getCoin])

    if(isFetching){
        return <Skeleton avatar paragraph={{ rows: 4 }} />
    }

    return (
        <div>
                
                {coin.map(item => {
                    return (
                    <>
                        <div>
                            <PageHeader
                            title={item.name}
                            tags={<Tag color="blue">Rank:{item.rank}</Tag>}
                            subTitle={item.symbol}
                            >
                            <h3>This is the text</h3>
                            <Row type="flex">
                                <Statistic title="Beta-Value" value={item.beta_value} />
                                <Statistic
                                title="Price"
                                prefix="$"
                                value={item.circulating_supply}
                                style={{
                                    margin: "0 32px"
                                }}
                                />
                                <Statistic title="Market Cap" prefix="$" value={54656} />
                            </Row>
                            <br />
                            <Button key="1" type="primary">
                                Primary
                            </Button>
                            </PageHeader>
                        </div>
                    </>
                    )
                })}
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