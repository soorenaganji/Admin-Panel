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
import { Link } from 'react-router-dom'
export default class 
 extends Component {
  render() {
    return (
    <>
       <div className={styles.container} >
           <ul className={styles.main} >
           <li className={styles.first}><img src={logo} className={styles.logo} /></li>
            <li className={styles.item}><Link to={"/"} ><img src={feed} /> Dashboard</Link></li>
            <li className={styles.item}><Link to={"/chart"} ><img src={chart} />Charts</Link></li>
            <li className={styles.item}><Link to={"/bank"} ><img src={bank} />Bank</Link></li>
            <li className={styles.item}><Link to={"/crypto"} ><img src={box} />Crypto</Link></li>
            <li className={styles.item}><Link to={"/calendar"} ><img src={calendar} />Calendar</Link></li>
            <li className={styles.item}><Link to={"/userprofile"} ><img src={user} />User Profile</Link></li>
            <li className={styles.item}><Link to={"/salecrm"} ><img src={sticker} />Sale CRM</Link></li>
            <li className={styles.item}><Link to={"/project"} ><img src={neww} />Project</Link></li>
           </ul>
            <div className={styles.download} >
              <p className={styles.descriptionOne} >PDF Report</p>
              <p className={styles.descriptionTwo} >Download monthly report</p>
              <button className={styles.buttonDownload} >Download</button>
             </div>
       </div>
    </>
    )
  }
}
