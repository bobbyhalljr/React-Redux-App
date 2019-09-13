import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { PageHeader, Tag, Button, Statistic, Descriptions, Row, Skeleton } from 'antd';


import { getCoin } from '../actions';
import Coin from '../components/Coin';

const Coins = ({ getCoin, coin, isFetching, error }) => {
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
                            tags={<Tag color="blue">Running</Tag>}
                            subTitle="This is a subtitle"
                            >
                            <h3>This is the text</h3>
                            <Row type="flex">
                                <Statistic title="Status" value="Pending" />
                                <Statistic
                                title="Price"
                                prefix="$"
                                value={568.08}
                                style={{
                                    margin: "0 32px"
                                }}
                                />
                                <Statistic title="Balance" prefix="$" value={3345.08} />
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