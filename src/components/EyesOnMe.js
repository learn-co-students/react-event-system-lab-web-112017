// Code EyesOnMe Component Here
import React from 'react'

class EyesOnMe extends React.Component{
  constructor(){
    super()

    this.state = {
      vision: false
    }
  }


  blur(){
    console.log("Hey! Eyes on me!")
  }

  focus(){
    console.log("Good!")
  }

  render(){
    return (
      <button onFocus={this.focus} onBlur={this.blur}/>
    );
  }
}

export default EyesOnMe;
