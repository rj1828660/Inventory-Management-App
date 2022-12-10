import React from 'react'
import styles from "./Search.module.scss"
import {BiSearch} from "react-icons/bi" 
const Search = (value,onChange) => {
  return (
    <div className={styles.search}>
        <BiSearch size={18} className={styles.icon}/>
        <input type="text" placeholder='Search Products' value={value} onChange={onChange}></input>
    </div>
  )
}

export default Search
//react template rafce