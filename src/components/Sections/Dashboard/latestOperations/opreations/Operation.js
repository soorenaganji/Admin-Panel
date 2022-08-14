import React, { Component } from 'react'
import styles from './operation.module.css'
import trash from './bin.svg'
export default class Operation extends Component {
    constructor(){
        super();
        this.state ={
            isShown : false
        }
    }
   clickHandler = () => { 
    this.setState((prevState) => ({
       isShown : !prevState.isShown
    }))
   }
  render() {
    const {isShown} = this.state
    return (
     <>
        <div className={styles.container} onClick={this.clickHandler} >
           <div className={styles.data} >
             <img src={this.props.src} />
             <p>{this.props.name}</p>
           </div>
           <div className={styles.cost} ><p>{this.props.cash}$</p></div>
           <img src={trash}  className={isShown ? styles.trash : styles.trashoff} />
        </div>
     </>
    )
  }
}
