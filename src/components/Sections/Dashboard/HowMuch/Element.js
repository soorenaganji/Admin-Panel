import React, { Component } from 'react'
import "./Element.css"
export default class Element extends Component {
  render() {
    const { precent } = this.props
    return (
      <>
      <div className={"containeer"} >
        <img src={this.props.src} className={"img"} />
        <p className={"name"} >{this.props.name}</p>
        <div className={"all"} ><span className={"main " + precent}></span></div>
      </div>
      </>
    )
  }
}
