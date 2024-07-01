import React from 'react';
import feedimg01 from './img/feedimg01.jpg';
import feedimg02 from './img/feedimg02.jpg';
import feedimg03 from './img/feedimg03.jpg';
import feedimg04 from './img/feedimg04.jpg';
import feedimg05 from './img/feedimg05.jpg';
import feedimg06 from './img/feedimg06.jpg';
import feedimg07 from './img/feedimg07.jpg';
import feedimg08 from './img/feedimg08.jpg';

const UserFeedImg = () => {



  
  return (
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '16px' }}>
      <img src={feedimg01} alt="Image 1" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg02} alt="Image 2" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg03} alt="Image 3" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg04} alt="Image 4" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg05} alt="Image 5" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg06} alt="Image 6" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg07} alt="Image 7" style={{ width: '100%', height: 'auto' }} />
      <img src={feedimg08} alt="Image 8" style={{ width: '100%', height: 'auto' }} />
    </div>
  );
};

export default UserFeedImg;


