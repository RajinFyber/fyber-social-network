import React from 'react'
import './LoginHeader.css'
import {Link} from 'react-router-dom';

function LoginHeader() {
    return (
      <div className="header">
        <Link className='link' to = '/'>
          <img src='https://theme.zdassets.com/theme_assets/10024224/ae923dea1a6cee49e01fda1a566758dcf687d8dd.png' alt='Fyber logo' className='header__logo' />
        </Link>

        <Link className="/register" to="/register">
          <button className="header__button">Create New Account</button>
        </Link>
      </div>
    )
}

export default LoginHeader
