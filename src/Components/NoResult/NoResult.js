import React from 'react'
import styles from './noResult.module.css'
import noResultImg from '../../Images/noResult.png'

const NoResult = () => {
  return (
    <div className={styles.noResult}>
      <img src={noResultImg} alt='No result found'/>
      <h1>Sorry no more results to show.</h1>
      <h4>Try searching for some other topic.</h4>
    </div>
  )
}

export default NoResult