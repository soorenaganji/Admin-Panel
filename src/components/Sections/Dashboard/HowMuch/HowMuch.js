import React from 'react'
import styles from './HowMuch.module.css'
import Element from './Element'
import first from './people.svg'
import second from './retweet.svg'
import third from './clipboard.svg'
import fourth from './swap-horizontal.svg'
export default function HowMuch () {
  return (
    <>
     <div className={styles.container} >
      <Element className={styles.element} src={first}  name={"People"}  precent={"thirtythree"} />
      <Element className={styles.element} src={second} name={"Trade"}  precent={"thirtynine"} />
      <Element className={styles.element} src={third}  name={"Reports"}  precent={"sixty"} />
      <Element className={styles.element} src={fourth} name={"Exchange"}  precent={"ten"} />
     </div>
    </>
  )
}
