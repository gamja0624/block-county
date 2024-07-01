import React from 'react';
import profileImg from './ProfileImg/profileImg.jpg'
const UserProfile = () => {
  return (
    <div >
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', padding: '1rem' }}>
        <div style={{ width: '150px', height: '150px', borderRadius: '50%', overflow: 'hidden' }}>
          <img src={profileImg} alt="Round Image" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ marginTop: '1rem', textAlign: 'center' }}>
          <h2 style={{ color: '#fff' }}>popato1234</h2>
          <p>
            <p style={{ color: '#fff' }} > #슈퍼마리오 64 구함</p>
            <p style={{ color: '#fff' }} > #수집+촬영</p>
          </p>
        </div>
      </div>
    </div>
  );

}

export default UserProfile