import React from 'react'
import {Select, Typography, Row, Col, Avatar, Card } from 'antd';
import moment from 'moment/moment';
import { useGetCryptoNewsQuery } from '../services/cryptoNewsApi';

const {Text, Title} =Typography;
const {Option} = Select;

//fetch the news data,create newsapi.js

const News = (simplified) => {
  const {data: cryptoNews} = useGetCryptoNewsQuery({newsCategory:'Cryptocurrency', count:simplified ? 6:12})
  if(!cryptoNews?.value) return 'Loading.....';

  return (
    <>
       {/* <Row glutter={[24, 24]}>
         {cryptoNews.value.map((news, i) => (
           <Col xs={24} sm={12} lg={8} key={i}>
                <Card hoverable className='news-card'>
                  <a href={news.url} target="blank" ref="noreferrer">
                    <div className="news-image-container">
                      <Title className='news-title' level={4}>{news.name}

                      </Title>

                    </div>

                  </a>

                </Card>
           </Col>

         ))}

       </Row> */}
    </>
  )
}

export default News