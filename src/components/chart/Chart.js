import React from 'react'
import chart from './line.png'
import styles from './Chart.module.css'
 const Chart = () => {
  return (
    <>
    <div className={styles.container} >
    <div className={styles.header} > <p className={styles.title} >Activity</p> <p className={styles.more} >...</p> </div>
    <div className={styles.main} >Nothing to see here yet</div>
    </div>
    </>
  )
}
export default Chart