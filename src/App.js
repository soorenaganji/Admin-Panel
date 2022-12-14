import React, { Component } from 'react'
import styles from "./App.module.css"
import Dashboard from './components/Sections/Dashboard/Dashboard'
import { Route } from 'react-router-dom'
import Bank from "./components/Sections/Bank/Bank"
import Crypto from './components/Sections/Crypto/Crypto'
import Charts from './components/Sections/Charts/Charts'
import Calendar from './components/Sections/calendar/Calendar'
import UserProfile from './components/Sections/UserProfile/UserProfile'
import Project from './components/Sections/Project/Project'
import SaleCrm from './components/Sections/SaleCRM/SaleCrm'
import Header from './components/Global/header/Header'
import Tasks from './components/Global/tasks/Tasks'
export default function App () {

    return(
    <>
      <div className={styles.container} >
        <Header />
        <Tasks/>
      <div>
       <Route exact path={"/"} component={Dashboard} />
       <Route path={"/bank"} component={Bank} />  
       <Route path={"/crypto"} component={Crypto} />  
       <Route path={"/charts"} component={Charts} />  
       <Route path={"/calendar"} component={Calendar} />  
       <Route path={"/userprofile"} component={UserProfile} />
       <Route path={"/project"} component={Project} /> 
       <Route path={"/salecrm"} component={SaleCrm} />
      </div>  
      </div>
    </>
    )
  }