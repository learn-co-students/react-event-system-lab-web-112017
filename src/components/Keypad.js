// Code Keypad Component Here
import React from 'react'

class Keypad extends React.Component {

  keyPressed = () => {
    console.log('Entering password...');
  }

  render() {
    return(
      <input type="password" onKeyUp={this.keyPressed}/>
    )
  }
}

export default Keypad;
