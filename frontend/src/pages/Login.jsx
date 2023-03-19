import React from 'react'
import '../assets/css/Form.css'
import {Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Login = () => {
  const navigate = useNavigate()

   // form handler
   const onFinishHandler = async (values) => {
    const uri = 'https://dockbookbakcend.onrender.com'
    try {
      const res = await axios.post(uri + '/users/login', values);
      if(res.data.success){
        message.success('Login Successfully')
        localStorage.setItem('token', res.data.token)
        navigate('/')
      }else{
        message.error(res.data.message)
      }
    } catch (error) {
      console.log(error)
      message.error('Something Went Wrong')
    }
  }
  return (
    <>
          <div className="form-container">
            <Form layout='vertical' onFinish={onFinishHandler} className='register' autoComplete=''>
              <h3 className='text-center'>Login</h3>
                <Form.Item label='Email' name='email'>
                    <Input type='email' required placeholder='Email'/>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input type='password' required placeholder='Password'/>
                </Form.Item>
                <button className='btn btn-primary d-block mx-auto' type='submit'>Login</button>
                <div className='m-2 text-center'>
                <Link to='/register'>Not a User Register Here</Link>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Login