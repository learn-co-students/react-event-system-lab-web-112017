// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor(props) {
    super(props);
  };

  keyUpFunction() {
    console.log('Entering password...')
  }

  render() {
    return (
      <input type='password' onKeyUp={this.keyUpFunction} />
    )
  };
}

export default Keypad;
