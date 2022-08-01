import React, { Component } from 'react'
import styles from "./Header.module.css"
import Card from './card/Card'
import settingsIcon from './settings.svg'
import bell from './bell.svg'
export default class Header extends Component {
  render() {
    return (
      <>
        <div className={styles.container} >
            <ul>
                <li className={styles.nav} >OverView</li>
                <li className={styles.nav}></li>
            </ul>
            <ul className={styles.main} >
                <li className={styles.nav2} ><img src={settingsIcon} className={styles.icon} /></li>
                <li className={styles.nav2}><img src={bell} className={styles.icon} /></li>
                <li className={styles.Card} ><Card/></li>
            </ul>
        </div>
      </>
    )
  }
}