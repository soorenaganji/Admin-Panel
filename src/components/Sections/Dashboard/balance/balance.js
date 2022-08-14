import React, { Component } from 'react'
import styles from './balance.module.css'
import arrow  from './arrow-right.svg'
export default class balance extends Component {
    constructor () {
        super() ;
        this.state = {
            balance : 59700
        }
    }
  render() {
    const {balance} = this.state
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
}
