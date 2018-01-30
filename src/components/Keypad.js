import React from 'react'

class Keypad extends React.Component {
  constructor(){
    super()
  }

  typing(e){
    console.log("Entering password...")
  }

  render(){
    return (
      <input onKeyUp={this.typing} type="password" />
    )
  }
}

export default Keypad;
