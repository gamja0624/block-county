import React from 'react'
import { Menu } from 'antd';

const policyItems = ['쿠키설정', '개인정보 처리 방침', '사업자 정보 확인', '온라인 거래', '고객센터 1234-5678'].map((key) => ({
  key,
  label: (
    <a href={''}>
      {key}
    </a>
  ),
}));


const Policy = () => {
  return (
    <div>
      <Menu
        mode="horizontal"
        items={policyItems}
        style={{
          borderStyle: 'solid',
          borderRadius: '10%',
          color: '#fff',
          backgroundColor: '#252525',
          flex: 1,
          minWidth: 0,
        }}
      />


    </div>
  )
}

export default Policy;