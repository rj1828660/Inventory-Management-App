import React from 'react'
import Styles from "./auth.module.scss"

import {AiOutlineMail} from "react-icons/ai"
import { Link } from 'react-router-dom'
import Card from '../../component/card/card'
const Forgot = () => {
  return (
    <div className={`container ${Styles.auth}`}>
     <Card>
        <div className={Styles.form}>
              <div className='--flex-center'>
                <AiOutlineMail size={35} color='#999'/>
              </div>
              <h2>Forgot Password</h2>
            <form>
               <input type="email" placeholder='Email' required name='email'/>
              
               <button type="submit" className="--btn --btn-primary --btn-block">
                Get Reset Email
              </button>    
              <div className={Styles.links}>
                <p><Link to="/">- Home</Link></p> 
                <p><Link to="/login">-Login</Link></p>
                
                             
            </div>
            </form>  
           
           
        </div>   
              
    </Card>     
   </div>
  )
}

export default Forgot