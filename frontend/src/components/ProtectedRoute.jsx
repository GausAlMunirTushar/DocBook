import React from 'react'
import {Navigate} from 'react-dom'
export default function ProtectedRoute({children}) {
  if(localStorage.getItem('token')){
    return children
  }else{
    return <Navigate to='login'/>
  }
}