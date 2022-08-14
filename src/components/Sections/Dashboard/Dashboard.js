import React, { Component } from 'react'
import styles from "./Dashboard.module.css"
import Header from '../../Global/header/Header'
import Tasks from '../../Global/tasks/Tasks'
import Balance from './balance/balance'
import LatestOperation from './latestOperations/LatestOperation'
import Chart from './chart/Chart'
import HowMuch from './HowMuch/HowMuch'
import Chart2 from './chart/Chart2'
export default class Dashboard extends Component {
  render() {
    return (
      <>
           <Header/>
           <Tasks/>
           <div className={styles.cont} >
            <Balance/>
            <LatestOperation/>
             <Chart number="" />
          <HowMuch/>
          <Chart number={2} />
          <Chart2 />
           </div>
      </>
    )
  }
}
