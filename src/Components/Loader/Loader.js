import React from 'react'
import styles from './loader.module.css'
import loader from '../../Images/loader.gif'

const Loader = () => {
  console.log('loader');
  return (
    <div className={styles.loader}>
        <h3>Loading....</h3>
        <img src={loader} alt="loading" className={styles.loaderImg}/>
    </div>
  )
}

export default Loader