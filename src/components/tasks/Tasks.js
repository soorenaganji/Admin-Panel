import React, { Component } from 'react'
import styles from './Tasks.module.css'
import logo from './logo.png'
import box from './box.svg'
import chart from './chart.svg'
import feed from './feed.svg'
import neww from './new.svg'
import bank from './home-alt2.svg'
import sticker from './sticker.svg'
import user from './user.svg'
import calendar from './calendar.svg'
export default class 
 extends Component {
  render() {
    return (
    <>
       <div className={styles.container} >
           <ul>
           <li className={styles.first}><img src={logo} className={styles.logo} /></li>
            <li className={styles.item}><img src={feed} /> Dashboard</li>
            <li className={styles.item}><img src={chart} />Charts</li>
            <li className={styles.item}><img src={bank} />Bank</li>
            <li className={styles.item}><img src={box} />Crypto</li>
            <li className={styles.item}><img src={calendar} />Calendar</li>
            <li className={styles.item}><img src={user} />User Profile</li>
            <li className={styles.item}><img src={sticker} />Sale CRM</li>
            <li className={styles.item}><img src={neww} />Project</li>
            {/* <li className={styles.item}><input type={"radio"}/><input type={"radio"} /></li> */}
           </ul>
       </div>
    </>
    )
  }
}
