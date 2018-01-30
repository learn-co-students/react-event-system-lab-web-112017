// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {

  logger() {
    console.log('Entering password...')
  }

  render() {
    return (
      <div>
        <form>
          <input type="password" onKeyUp={this.logger}> </input>
        </form>
      </div>
    );
  }
}

export default Keypad;
