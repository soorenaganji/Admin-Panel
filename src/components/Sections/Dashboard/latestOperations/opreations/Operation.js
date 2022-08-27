import React, { useState } from 'react'
import styles from './operation.module.css'
import trash from './bin.svg'
export default function Operation (props) {
const [isShown , SetShown] = useState(false)
  const clickHandler = () => { 
   SetShown(prevShown => !prevShown)
   }
    return (
     <>
        <div className={styles.container} onClick={clickHandler} >
           <div className={styles.data} >
             <img src={props.src} />
             <p>{props.name}</p>
           </div>
           <div className={styles.cost} ><p>{props.cash}$</p></div>
           <img src={trash}  className={isShown ? styles.trash : styles.trashoff} />
        </div>
     </>
    )
  }

