import React from 'react';
import '../assets/css/Form.css'
import {Form, Input, message} from 'antd';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios'
const Register = () => {
    const navigate = useNavigate()
  // form handler
  const onFinishHandler = async (values) => {
     try {
        const uri = 'https://dockbookbakcend.onrender.com'
        const res = await axios.post(uri + '/users/register', values)
        if(res.data.success){
            message.success('Register Successfully')
            navigate('/login')
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
              <h3 className='text-center'>Register</h3>
                <Form.Item label='Name' name='name'>
                    <Input type='text' required placeholder='Name'/>
                </Form.Item>
                <Form.Item label='Email' name='email'>
                    <Input type='email' required placeholder='Email'/>
                </Form.Item>
                <Form.Item label='Password' name='password'>
                    <Input type='password' required placeholder='Password'/>
                </Form.Item>
                <button className='btn btn-primary d-block mx-auto' type='submit'>Register</button>
                <div className='m-2 text-center'>
                <Link to='/login'>Already User login Here</Link>
                </div>
            </Form>
        </div>
    </>
  )
}

export default Register