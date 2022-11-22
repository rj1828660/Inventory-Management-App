import React from 'react'
import Styles from "./auth.module.scss"

import {TiUserAddOutline} from "react-icons/ti"
import { Link } from 'react-router-dom'
import Card from '../../component/card/card'
const Register = () => {
  return (
    <div className={`container ${Styles.auth}`}>
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <TiUserAddOutline size={35} color='#999'/>
              </div>
              <h2>Register</h2>
               
            <form>
               <input type="text" placeholder='Name' required name='name'/>
               <input type="email" placeholder='Email' required name='email'/>
               <input type="password" placeholder='password' required name="password"/>
               <input type="password" placeholder=' Confirm password' required name="password"/>
               <button type="submit" className="--btn --btn-primary --btn-block">
                Register
              </button>    
            </form>  
            
            <span className={Styles.register}>
                <Link to="/">Home</Link>
                <p>&nbsp;Already have an account?&nbsp;</p>
                <Link to="/login">Login</Link>
            </span>
        </div>   
              
    </Card>     
   </div>
  )
}

export default Register;