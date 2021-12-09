import React from 'react'
import milify from 'millify';
import {Typography, Row, Col, Statistic} from 'antd';
import {Link} from 'react-router-dom';

import {useGetCryptosQuery} from '../services/cryptoApi';

const {Title} = Typography;

const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery();
    const globalStats = data?.data?.stats;

    if(isFetching) return 'Loading...'

    return (
        <div>
            <Title level={2} className="heading">Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats.total}/></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={milify(globalStats.totalExchanges)}/></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={milify(globalStats.totalMarketCap)}/></Col>
                <Col span={12}><Statistic title="Total 24h volume" value={milify(globalStats.total24hVolume)}/></Col>
                <Col span={12}><Statistic title="Total Markets" value={milify(globalStats.totalMarkets)}/></Col>
            </Row>
        </div>
    )
}

export default Homepage
