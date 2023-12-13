import React, { useState } from 'react'
import './css/LoginSignup.css';

export const LoginSignup = () => {
  const [user,setUser]=useState({})
  return (
    
    <div className='loginsignup'>
      <div className="loginsignup-container">
        <h1>Sign Up</h1>
        
        <div className="loginsignup-fields">
          
          <input type="text" placeholder='Your Name' name="name"/>
          <input type="email" placeholder='email Address' name="email"/>
          <input type="password" placeholder='password' name="password"/>
        </div>
        <button>Continue</button>
      
        <p className="loginsignup-login">
          Already have an accoun?<span>Login here</span></p>
          <div className="loginsignup-agree">
            <input type="checkbox" name="" id=""/>
            <p>By continuing, i agree to the terms of use & privacy policy</p>
          </div>

    </div>
    </div>
  )
}
