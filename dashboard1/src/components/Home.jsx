import React from 'react'
import AuthService from "./authService";

const Home = () => {
  const user = AuthService.getCurrentUser
  console.log('user' , user)
  return (
    <div>
      <>
      Home
      </>
    </div>
  )
}

export default Home