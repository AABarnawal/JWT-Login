import React from 'react'
import Login from './Login';
import Signup from './Signup';

function Home() {
  return (
    
    <div style={{display:"flex"}} >
      <Signup />
      <Login />
    </div>
  )
}

export default Home