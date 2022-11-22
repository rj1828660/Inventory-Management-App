import React from 'react'
import Styles from "./auth.module.scss"

import {BiLogIn} from "react-icons/bi"
import { Link } from 'react-router-dom'
import Card from '../../component/card/card'
const login = () => {
  return (
    <div className={`container ${Styles.auth}`}>
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <BiLogIn size={35} color='#999'/>
              </div>
              <h2>Login</h2>
            <form>
               <input type="email" placeholder='Email' required name='email'/>
               <input type="password" placeholder='password' required name="password"/>
               <button type="submit" className="--btn --btn-primary --btn-block">
                Login   
              </button>    
            </form>  
            <Link to="/forgot">Forgot Password</Link>
            <span className={Styles.register}>
                <Link to="/">Home</Link>
                <p>&nbsp;Don't have an account?&nbsp;</p>
                <Link to="/register">Register</Link>
            </span>
        </div>   
              
    </Card>     
   </div>
  )
}

export default login 