import React from 'react';
import '../assets/css/Form.css'
import {Form, Input} from 'antd';
import {Link} from 'react-router-dom'
const Register = () => {

  // form handler
  const onFinishHandler = (values) => {
      console.log(values)
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