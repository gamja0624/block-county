import React from 'react';
import logo from './img/logo.png'
import SearchBox from './SearchBox';
import UserMenu from './UserMenu';
import { Flex } from 'antd';

const Header = () => {

  return (
    <div style={{ margin: '0 auto' }}>
      <Flex style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '1rem', width: '100%', margin: '30px auto', }} wrap>
        <img
          style={{ maxWidth: '100%', display: 'inline', margin: '20px', }}
          src={logo}
        />
        <h1 style={{ textAlign: 'center', color: '#fffdfd', backgroundColor: '#000000', padding: '20px 80px', margin: '0 auto', width: 'auto' }}>
          BLOCK COUNTY
        </h1>
        <div>
          <UserMenu />
          <SearchBox />
        </div>
      </Flex>
    </div>

  )
}

export default Header;