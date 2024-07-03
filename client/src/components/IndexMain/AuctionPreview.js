import React from 'react';
import { Card } from 'antd';
import Timer72Hours from './Timer72Hours';
import auctionImg01 from './auctionImg/auctionImg01.jpg'

const { Meta } = Card;
const AuctionPreview = () => {

  return (
    <>
      <div style={{ width: '300px', height: '350px' }}>
        <Card
          style={{ width: '250px' }}
          cover={<img alt="acutionImage" src={auctionImg01} style={{ width: '100%', height: 'auto' }} />}
        >
          <Meta title="월 E 레고 21303" description='미개봉' />
        </Card>
        <Timer72Hours />
      </div>
    </>
  )
}

export default AuctionPreview