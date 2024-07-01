import React from 'react'
import { Menu } from 'antd'

const menuItem = ['login', 'sign up', 'cart', 'help'].map((key) => ({
  key,
  label: key,
}));

const UserMenu = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        theme=''
        items={menuItem}
        style={{
          width: '300px',
          margin: '10px',
          color:'#fff'
        }}
      /></div>
  )
}

export default UserMenu;