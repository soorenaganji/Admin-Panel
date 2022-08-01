import React, { Component } from 'react'
import Clock from 'react-live-clock'
import { Switch } from 'antd'
import moment from 'moment'
import  styles from './Clock.module.css'
class Clok extends Component {
  render() {
    return (
 <Clock format={'HH:mm:ss'} ticking={true} timezone={'US/Pacific'} />
    )
  }
}
export default Clok