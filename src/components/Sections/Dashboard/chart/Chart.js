import React , {Component} from 'react'
import styles from './Chart.module.css'
class Chart extends Component {
  render () {
  return (
    <>
    <div className={this.props.number === 2 ? styles.container2 : styles.container} >
    <div className={this.props.number === 2 ? styles.header2 : styles.header} > <p className={styles.title} >Activity</p> <p className={styles.more} >...</p> </div>
    <div className={this.props.number === 2 ? styles.main2 : styles.main} >Nothing to see here yet</div>
    </div>
    </>
  )
}
}
export default Chart