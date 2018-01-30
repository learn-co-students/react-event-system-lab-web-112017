import React from 'react';

class Keypad extends React.Component {

  handlePass = () =>  console.log('Entering password...')

  render() {
      return (
        <input type="password" onKeyUp={this.handlePass} />
      )
  }
}

export default Keypad;
