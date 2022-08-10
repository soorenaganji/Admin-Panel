import React, { Component } from 'react'
import styles from "./Element.module.css"
export default class Element extends Component {
  render() {
    return (
      <>
      <div className={styles.container} >
        <img src={this.props.src} className={styles.img} />
        <p className={styles.name} >{this.props.name}</p>
        <div className={styles.all} ><span className={styles.main} ></span></div>
      </div>
      </>
    )
  }
}
