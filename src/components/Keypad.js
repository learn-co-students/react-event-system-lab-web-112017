// Code Keypad Component Here
import React from 'react'
export default class Keypad extends React.Component {
  logEntering() {
    console.log("Entering password...")
  }

  render() {
    return (
      <div>
        // <label>Enter Password</label>
        <input type="password" onKeyUp={this.logEntering}></input>
      </div>
    )
  }
}
