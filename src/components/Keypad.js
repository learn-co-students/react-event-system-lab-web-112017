// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return (
      <input type='password'  onKeyUp={ () => {console.log('Entering password...')}} />
    )
  }
}

export default Keypad
