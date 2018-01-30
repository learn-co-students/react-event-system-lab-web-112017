// Code EyesOnMe Component Here
import React from 'react'
export default class EyesOnMe extends React.Component {
  logGood() {
    console.log("Good!")
  }
  logHey() {
    console.log("Hey! Eyes on me!")
  }
  render() {
    return (
      <div>
        // <p> focus and blur the button </p>
        <button onFocus = {this.logGood} onBlur= {this.logHey}></button>
      </div>
    )
  }
}
