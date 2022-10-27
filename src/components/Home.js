import React, { Component } from 'react'
import img from '../assets/images/14.jpg'

export default class Home extends Component {
  render() {
    return (
      <div><h1>Home</h1>
        <img src={img} alt="14"/>
      </div>
    )
  }
}
