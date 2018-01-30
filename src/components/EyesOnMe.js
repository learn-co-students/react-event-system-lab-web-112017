// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {

  logFocus() {
    console.log('Good!')
  }

  logDrift() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
      <div>
        <button onFocus={this.logFocus} onBlur={this.logDrift}></button>
      </div>
    )
  }
}

export default EyesOnMe;
