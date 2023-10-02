import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';
import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery();
  const stats = data?.data?.stats; // ? is optional chaining operator

  if(isFetching) return 'Loading...';
  else console.log(data);

  return (
    <div>
      <Typography.Title level={2} className="heading">Statistics</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Crypto Currencies" value={stats.total} /></Col>
        <Col span={12}><Statistic title="Exchanges" value={stats.totalExchanges} /></Col>
        <Col span={12}><Statistic title="Market Cap" value={millify(stats.totalMarketCap)} /></Col>
        <Col span={12}><Statistic title="24hr Volume" value={millify(stats.total24hVolume)} /></Col>
        <Col span={12}><Statistic title="Markets" value={millify(stats.totalMarkets)} /></Col>
      </Row>

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Top 10 Cryptos</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/cryptocurrencies">Show More</Link></Typography.Title>
      </div>
      <Cryptocurrencies simplified />

      <div className="home-heading-container">
        <Typography.Title level={2} className="home-title">Current Affairs</Typography.Title>
        <Typography.Title level={3} className="show-more"><Link to="/news">Show More</Link></Typography.Title>
      </div>
      <News simplified />

    </div>
  )
}

export default Homepage