import React, { Component } from 'react'
import styles from './LatestOperation.module.css'
import Operation from './opreations/Operation'
import visa from './visa-logo.webp'
import mastercard from './mastercard-logo.png'
const LatestOperation = () => {
    return (
    <>
    <div className={styles.container} >
      <div className={styles.title} >
       <p className={styles.title2} >Latest operation</p>
       <p className={styles.more} >...</p>
        </div>
        <ul>
        <li><Operation src={visa} name="Visa" cash={2530} /></li>
        <li><Operation src={mastercard} name="Mastercard" cash={700} /></li>
        <li><Operation src={visa} name="Visa" cash={4000} /></li>
        <li><Operation src={mastercard} name="Mastercard" cash={7240} /></li>
        <li><Operation src={visa} name="Visa" cash={1200} /></li>
       </ul>
    </div>
    </>
    )
  }
export default LatestOperation;
