// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  blur = () => {
    console.log('Hey! Eyes on me!')
  }
  focus = () => {
    console.log('Good!')
  }
  render() {
    return (
      <button onFocus={this.focus} onBlur={this.blur}></button>
    )
  }
}

export default EyesOnMe
