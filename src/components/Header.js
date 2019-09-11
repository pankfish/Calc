import React, { Component } from 'react'

export class Header extends Component {
  render() {
    return (
      <div className="Header"style={HeaderStyle}>
        <h1>React Construction Calculator</h1>
      </div>
    )
  }
}
const HeaderStyle={
  background:'#0984E3',
  color: 'white'
}
export default Header
