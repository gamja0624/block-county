import React, { useState } from 'react';
import { Button, Menu } from 'antd'
import { Link } from 'react-router-dom';
import  sikpMenu from './css/sikpMenu.css'  ;

// < 수정 사항 >
// 1. 메뉴 map으로 수정하기 
// 2. 스타일 지정 : 배경색 제거하고, font color 하얀색 

const menuItems1 = [
  {
    key: 'sub1',
    label: 'Menu 바로가기',
  },
  {
    key: '1',
    label: 'Live auction',
  },
  {
    key: '2',
    label: 'AUCTION',
  },
  {
    key: '3',
    label: 'LEGO GALLERY',
  },
  {
    key: '4',
    label: 'COMMUNITY',
  },
]

const menuItems2 = [
  {
    key: 'sub1',
    label: '내 정보 바로가기',
  },
  {
    key: '1',
    label: '개인정보 수정',
  },
  {
    key: '2',
    label: (
      <Link to="/UserFeed" >내 갤러리 </Link>
    ),
  },
  {
    key: '3',
    label: '장바구니',
  },
  {
    key: '4',
    label: '내 게시글 관리',
  },

]

const menuItems3 = [
  {
    key: 'sub1',
    label: '홈페이지 가이드',
  },
  {
    key: '1',
    label: 'SITE 소개',
  },
  {
    key: '2',
    label: '공지사항',
  },
  {
    key: '3',
    label: '교 육',
  },
  {
    key: '4',
    label: '경매 소개',
  },
]


const menuStyle = {
  width: 200,
  margin: '20px',
  backgroundColor: '#252525',
  color: '#fff'
}


const SkipMenu = () => {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'left', padding: '1rem' }}>
        <Menu
          style={menuStyle}
          items={menuItems1}
          mode="inline"
        />

        <Menu
          style={menuStyle}
          items={menuItems2}
          mode="inline"
        />

        <Menu
          style={menuStyle}
          items={menuItems3}
          mode="inline"
        />

      </div>

    </>
  );
};

export default SkipMenu;