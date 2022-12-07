import React, { useEffect } from "react"
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom"
import { toast } from "react-toastify"
import { SET_LOGIN } from "../redux/features/auth/authSlice"
import { getLoginStatus } from "../services/authServices"




const useRedirectLoggedOutUser=(path)=>{
    const dispatch=useDispatch();
    const navigate=useNavigate();
    useEffect(()=>{
       const redirectLoggedOutUser=async()=>{
          const isLoggedIn=await getLoginStatus()
          dispatch(SET_LOGIN(isLoggedIn))
 
          if(!isLoggedIn){
            toast.info("session expired, Please login")
            navigate(path)
            return 
          }
       };
       redirectLoggedOutUser();
    },[navigate,path,dispatch])
}

export default useRedirectLoggedOutUser