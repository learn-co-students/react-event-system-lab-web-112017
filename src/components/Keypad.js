// Code Keypad Component Here

import React from 'react'

class Keypad extends React.Component{
  constructor(){
    super()
  }

  enteringPassword = (e) => {
    console.log("Entering password...")
  }

  render(){
    return (
      <input type="password" onKeyUp={this.enteringPassword}/>
    )
  }
}

export default Keypad;
