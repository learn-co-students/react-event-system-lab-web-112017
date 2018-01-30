import React from 'react';

class Keypad extends React.Component {

  consoleLogEnterPassword = () => {
    console.log('Entering password...')
  }

  render() {
    return(
      <input type="password" onKeyUp={this.consoleLogEnterPassword}></input>
    )
  }
}

export default Keypad;
