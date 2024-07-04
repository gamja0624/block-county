import React from 'react';
import { Button, Flex } from 'antd';
import { HomeOutlined } from '@ant-design/icons';
import marketlogo from './Navbar_logo/marketlogo.png'
import gallerylogo from './Navbar_logo/gallerylogo.png'
import commulogo from './Navbar_logo/commulogo.png'
import guidelogo from './Navbar_logo/guidelogo.png'
import { Link } from 'react-router-dom';
import navbar from './css/navbar.css'

const Navbar = () => {
  return (// 
    // 로고 이미지 50px
    <div style={{ margin: '0 auto' }}>
      <Flex style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }} gap="large" wrap >
        <button style={{ borderColor: '#252525', backgroundColor: '#252525', padding: '20px', width: '100px', height: '20px ', border: 'none' }}>
          <Link to="/">
            <HomeOutlined style={{ width: '100px', height: 'auto', padding: '0', margin: '0 auto', position:'relative', top:'-22px' }} />
          </Link>
        </button>
        <Button style={{ borderColor: '#BA1C02', backgroundColor: '#BA1C02', padding: '20px 55px 20px 40px' }}>
          <img src={marketlogo} alt="market" style={{ width: '50px', height: 'auto' }} />
          MARKET
        </Button>
        <Button style={{ borderColor: '#FFD147', backgroundColor: '#FFD147', padding: '20px 50px 20px 40px' }}>
          <img src={gallerylogo} alt="gallery" style={{ width: '50px', height: 'auto' }} />
          GALLERY
        </Button>
        <Button style={{ borderColor: '#1A9C62', backgroundColor: '#1A9C62', padding: '20px 50px 20px 40px' }}>
          <img src={commulogo} alt="community" style={{ width: '40px', height: 'auto' }} />
          COMMUNITY
        </Button>
        <Button style={{ borderColor: '#2452CF', backgroundColor: '#2452CF', padding: '20px 60px 20px 40px' }}>
          <img src={guidelogo} alt="gudie" style={{ width: '40px', height: 'auto' }} />
          GUIDE
        </Button>
      </Flex>
    </div>

  );
};

export default Navbar;