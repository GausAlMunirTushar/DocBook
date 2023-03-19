import React from 'react'
import '../assets/css/Layout.css'
import { sidebarMenu } from '../data/data'
import {Link, useLocation} from 'react-router-dom'
const Layout = ({children}) => {
    const location = useLocation()
  return (
    <>
        <div className="main">
            <div className="layout">
                <div className="sidebar">
                    <div className="logo"><h4>DocBook</h4> <hr /></div>
                    <div className="menu">
                        {sidebarMenu.map(menu => {
                            const isActive  = location.pathname === menu.path
                            return (
                              <>
                                <div className={`menu-item ${isActive && "active"}`}>
                                    <Link className='' to={menu.path}>{menu.name}</Link>
                                </div>
                              </>  
                            )
                        })}
                    </div>
                </div>
                <div className="content">
                    <div className="header">Header</div>
                    <div className="body">{children}</div>
                </div>
            </div>
        </div>
    </>
  )
}

export default Layout