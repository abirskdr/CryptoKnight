import React from 'react';
import millify from 'millify';
import { Typography, Row, Col, Statistic } from 'antd';
import { Link } from 'react-router-dom';

import { useGetCryptosQuery } from '../services/cryptoApi';
import Cryptocurrencies from './Cryptocurrencies';
import News from './News';
import Loader from './Loader';

const { Title } = Typography;

const Homepage = () => {
  const { data, isFetching } = useGetCryptosQuery(10);
  const globalStats = data?.data?.stats;

  if (isFetching) return <Loader />;

  return (
    <>
      <Title level={2} className="heading">
        Global Crypto Stats
      </Title>
      <Row gutter={[32, 32]}>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Exchanges"
            value={millify(globalStats.totalExchanges)}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Market Cap:"
            value={`$${millify(globalStats.totalMarketCap)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total 24h Volume"
            value={`$${millify(globalStats.total24hVolume)}`}
          />
        </Col>
        <Col span={12}>
          <Statistic title="Total Cryptocurrencies" value={globalStats.total} />
        </Col>
        <Col span={12}>
          <Statistic
            title="Total Markets"
            value={millify(globalStats.totalMarkets)}
          />
        </Col>
      </Row>
      <div className="Cryptocurrency Section">
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Top Cryptos In The World
          </Title>
        </div>
        <Cryptocurrencies simplified />
        <Title level={4} className="show-more">
          <Link to="/cryptocurrencies">Show more cryptocurrencies...</Link>
        </Title>
      </div>
      <div className="News Section">
        <div className="home-heading-container">
          <Title level={2} className="home-title">
            Latest Crypto News
          </Title>
        </div>
        <News simplified />
        <Title level={4} className="show-more">
          <Link to="/news">Show more latest news...</Link>
        </Title>
      </div>
    </>
  );
};

export default Homepage;
