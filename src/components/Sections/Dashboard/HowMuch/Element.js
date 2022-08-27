import React, { Component } from 'react'
import "./Element.css"
const  Element = (props) => {
    return (
      <>
      <div className={"containeer"} >
        <img src={props.src} className={"img"} />
        <p className={"name"} >{props.name}</p>
        <div className={"all"} ><span className={"main " + props.precent}></span></div>
      </div>
      </>
    )
  }
  export default Element
