import React, { Component } from 'react'
import styles from "./Card.module.css"
import me from './me copy.jpg'
export default function Card () {
    return (
      <div className={styles.container} >
     <img src={me} className={styles.pic} />
     <p className={styles.name} >Sorena Ganji</p>
      </div>
    )
  }
