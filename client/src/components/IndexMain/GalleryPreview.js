import React from 'react'
import { Carousel } from 'antd';
import galleryImg01 from './galleryImg/galleryImg01.jpg';
import galleryImg02 from './galleryImg/galleryImg02.jpg';
import galleryImg03 from './galleryImg/galleryImg03.jpg';
import galleryImg04 from './galleryImg/galleryImg04.jpg';
import galleryImg05 from './galleryImg/galleryImg05.jpg';

const imgStyle = {
  margin: 'auto',
}

const GalleryPreview = () => {
  return (
    <div style={{ width: '700px', margin: '0 auto', backgroundColor: '#474747' }}>
      <Carousel arrows infinite={false}>
        <div>
          {/* <h3 style={contentStyle}> */}
          <img src={galleryImg05} style={imgStyle} />
          {/* </h3> */}
        </div>
        <div>
          <img src={galleryImg02} style={imgStyle} />
        </div>
        <div>
          <img src={galleryImg03} style={imgStyle} />
        </div>
        <div>
          <img src={galleryImg04} style={imgStyle} />
        </div>
        <div>
          <img src={galleryImg01} style={imgStyle} />
        </div>
      </Carousel>
    </div>
  )
}

export default GalleryPreview