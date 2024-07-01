import React from 'react';
import { Card } from 'antd';
import Timer72Hours from './Timer72Hours';
import auctionImg01 from './auctionImg/auctionImg01.jpg'

const { Meta } = Card;
const AuctionPreview = () => {

  // 타이틀(참여인원 표시) + 이미지 + 설명 + 드롭다운 박스 + 현재시간
  return (
    <>
      {/* antd : card */}
      {/* antd : statics - countdown */}
      <div style={{ width: '300px', height: '350px' }}>
        <Card
          // hoverable
          cover={<img alt="acutionImage" src={auctionImg01} style={{ width: '100%', height: 'auto' }} />}
        >
          <Meta title="타이틀" description='' />
        </Card>
        <Timer72Hours style={{ width: '300px' }} />
      </div>
    </>
  )
}

export default AuctionPreview