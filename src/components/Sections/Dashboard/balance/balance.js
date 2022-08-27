import React, { useState } from 'react'
import styles from './balance.module.css'
import arrow  from './arrow-right.svg'
export default function Balance() {
  const [balance , setBalance] = useState(59700)
    return (
    <>
        <div className={styles.container} >
         <p className={styles.p} >Current balance :</p>
        <img src={arrow} className={styles.arrow} />
          <p className={styles.balance} >{balance}$</p>
          <button className={styles.btn} >New</button>
        </div>
    </>
    )
  }

