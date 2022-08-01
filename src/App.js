import React, { Component } from 'react'
import styles from "./App.module.css"
import Header from './components/header/Header'
import Tasks from './components/tasks/Tasks'
import Balance from './components/balance/balance'
import LatestOperation from './components/latestOperations/LatestOperation'
import Chart from './components/chart/Chart'
export default class App extends Component {
  render() {
    return (
    <>
      <div className={styles.container} >
           <Header/>
           <Tasks/>
           <div className={styles.cont} >
            <Balance/>
            <LatestOperation/>
             <Chart/>
           </div>
      </div>
    </>
    )
  }
}
