import React from 'react'
import UserFeedImg from './UserFeedImg'
import Navbar from '../../Navbar/Navbar'
import Footer from '../../Footer/Footer'
import UserProfile from '../UserProfile/UserProfile'


const UserFeed = () => {

  return (
    <div className="App" style={{ backgroundColor: '#252525', width: '1200px', height: '100%', margin: '0 auto' }}>
      <div style={{ marginTop: '30px' }}>
        <Navbar />
      </div>
      <div >
        <div style={{ position: 'relative', left: '-450px', top: '50px' }}>
          <UserProfile />
        </div>
        <div style={{ position: 'relative', right: '-100px', top: '-300px', width: '800px', margin: '0 auto' }}>
          <UserFeedImg />
        </div>
      </div>
      <div style={{ marginTop: '-250px' }}>
        <Footer />
      </div>
    </div>
  )
}

export default UserFeed