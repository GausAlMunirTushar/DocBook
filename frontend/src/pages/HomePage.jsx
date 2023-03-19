import React, {useEffect} from 'react'
import axios from 'axios'
import Layout from '../components/Layout'
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
    <Layout>
        <h1>Home</h1>
    </Layout>
  )
}

export default HomePage