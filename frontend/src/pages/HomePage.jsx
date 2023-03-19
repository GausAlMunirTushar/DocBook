import React, {useEffect} from 'react'
import axios from 'axios'
const HomePage = () => {
  // login user data
  const getUserData = async () => {
    try {
      const uri = 'https://dockbookbakcend.onrender.com'
      const res = await axios.post(uri + '/users/getUserData', {}, {
        headers: {
          Authorization: "Bearer " + localStorage.getItem('token')
        }
      })
    } catch (error) {
      console.log(error)
    }
  }
  useEffect(() => {
    getUserData()
  }, []);
  return (
    <>
        <h1>Home Page</h1>
    </>
  )
}

export default HomePage