import React from 'react';
import { Button, Flex } from 'antd';
import homelogo1 from './Navbar_logo/homelogo1.png'
import marketlogo from './Navbar_logo/marketlogo.png'
import gallerylogo from './Navbar_logo/gallerylogo.png'
import commulogo from './Navbar_logo/commulogo.png'
import guidelogo from './Navbar_logo/guidelogo.png'
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (// 
    // 로고 이미지 50px
    <div style={{ margin: '0 auto' }}>
      <Flex style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }} gap="large" wrap >
        <Button style={{ borderColor: '#252525', backgroundColor: '#252525', padding: '20px 40px' }}>
          <Link to="/">
            <img src={homelogo1} alt="home" style={{ width: '100%', height: 'auto' }} />
          </Link>
        </Button>
        <Button style={{ borderColor: '#BA1C02', backgroundColor: '#BA1C02', padding: '20px 40px' }}>
          <img src={marketlogo} alt="market" style={{ width: '100%', height: 'auto' }} />
          MARKET
        </Button>
        <Button style={{ borderColor: '#FFD147', backgroundColor: '#FFD147', padding: '20px 40px' }}>
          <img src={gallerylogo} alt="gallery" style={{ width: '100%', height: 'auto' }} />
          GALLERY
        </Button>
        <Button style={{ borderColor: '#1A9C62', backgroundColor: '#1A9C62', padding: '20px 40px' }}>
          <img src={commulogo} alt="community" style={{ width: '100%', height: 'auto' }} />
          COMMUNITY
        </Button>
        <Button style={{ borderColor: '#2452CF', backgroundColor: '#2452CF', padding: '20px 40px' }}>
          <img src={guidelogo} alt="gudie" style={{ width: '100%', height: 'auto' }} />
          GUIDE
        </Button>
      </Flex>
    </div>

  );
};

export default Navbar;