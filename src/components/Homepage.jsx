import React from 'react'
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';


const Homepage = () => {
  return (
    <div>
      <Typography.Title level={2} className="heading">Statistics</Typography.Title>
      <Row>
        <Col span={12}><Statistic title="Crypto Currencies" value="5" /></Col>
        <Col span={12}><Statistic title="Exchanges" value="5" /></Col>
        <Col span={12}><Statistic title="Market Cap" value="5" /></Col>
        <Col span={12}><Statistic title="24hr Volume" value="5" /></Col>
        <Col span={12}><Statistic title="Markets" value="5" /></Col>
      </Row>
    </div>
  )
}

export default Homepage