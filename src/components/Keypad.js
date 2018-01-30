// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  handleKeyUp = () => {
    //e.preventDefault();
    console.log('Entering password...')
  }

  render() {
    return (
      <input type="password" onKeyUp={this.handleKeyUp}></input>
    )
  }
}

export default Keypad;
