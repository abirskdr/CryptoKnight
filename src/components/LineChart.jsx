import React from 'react';
import { Line } from 'react-chartjs-2';
import { Col, Row, Typography } from 'antd';

const { Title } = Typography;

const LineChart = ({ coinHistory, currentPrice, coinName, time }) => {
  const coinPrice = [];
  const coinTimestamp = [];

  for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
    coinPrice.push(coinHistory?.data?.history[i].price);
  }

  // console.log(time);
  if (time === '3h' || time === '24h') {
    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
      let date = new Date(coinHistory?.data?.history[i].timestamp * 1000);
      const timeo =
        date.getHours() > 12
          ? `${('0' + (date.getHours() - 12)).slice(-2)}:${(
              '0' + date.getMinutes()
            ).slice(-2)}PM`
          : `${('0' + date.getHours()).slice(-2)}:${(
              '0' + date.getMinutes()
            ).slice(-2)}AM`;
      coinTimestamp.push(timeo);
    }
  } else if (time === '7d' || time === '30d' || time === '3m') {
    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
      let date = new Date(coinHistory?.data?.history[i].timestamp * 1000);
      const timeo = `${('0' + date.getDate()).slice(-2)}/${(
        '0' +
        (date.getMonth() + 1)
      ).slice(-2)}`;
      coinTimestamp.push(timeo);
    }
  } else {
    for (let i = coinHistory?.data?.history?.length - 1; i >= 0; i -= 1) {
      const date = new Date(
        coinHistory?.data?.history[i].timestamp * 1000
      ).toLocaleDateString();
      coinTimestamp.push(date);
    }
  }
  const data = {
    labels: coinTimestamp,
    datasets: [
      {
        label: 'Price In USD',
        data: coinPrice,
        fill: false,
        backgroundColor: '#0071bd',
        borderColor: '#0071bd',
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };

  return (
    <>
      <Row className="chart-header">
        <Title level={2} className="chart-title">
          {coinName} Price Chart{' '}
        </Title>
        <Col className="price-container">
          <Title level={5} className="price-change">
            Change:{' '}
            <span
              style={{ color: coinHistory?.data?.change > 0 ? 'green' : 'red' }}
            >
              {coinHistory?.data?.change}%
            </span>
          </Title>
          <Title level={5} className="current-price">
            Current {coinName} Price: $ {currentPrice}
          </Title>
        </Col>
      </Row>
      <Line data={data} options={options} />
    </>
  );
};

export default LineChart;
