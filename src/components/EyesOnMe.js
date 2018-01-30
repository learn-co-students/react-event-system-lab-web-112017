// Code EyesOnMe Component Here
import React from 'react';

class EyesOnMe extends React.Component {
  constructor(props) {
    super(props)
  };

  focusEvent() {
    console.log('Good!')
  }

  blurEvent() {
    console.log('Hey! Eyes on me!')
  }

  render() {
    return (
        <button onFocus={this.focusEvent} onBlur={this.blurEvent}>Button</button>
    )
  };
}

export default EyesOnMe;
