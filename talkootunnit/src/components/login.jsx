import React from 'react';
import './login.css';

import userIcon from './assets/person.png';
import passwordIcon from './assets/password.png';
//import kuvat formiin ja linkkaa ne hakasulkeilla oikeaan paikkaan

const Login = () => {
  return (
    <div className="login-container">
        <div className='login-header'>
            Kirjaudu sisään
            <div className='underline'></div>
        </div>
        <div className='inputs'>
            <div className='input'>
                <img src={userIcon} alt='Käyttäjä' />
                <input type='text' placeholder='käyttäjätunnus' />
            </div>
            <div className='input'>
                <img src={passwordIcon} alt='Salasana' />
                <input type='password' placeholder='salasana' />
            </div>
        </div>
        <div className='submit-container'>
            <div className='submit-button'> Kirjaudu </div>
            
        </div>
        <div className='forgot-password'>Unohtuiko salasana?<span> Nollaa salasana </span></div>
    
    </div>
    );
};

export default Login;