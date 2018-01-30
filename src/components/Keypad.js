// Code Keypad Component Here
import React from 'react';

class Keypad extends React.Component{

capturePassword = () => {
   console.log(`Entering password...`)
}


 render() {
   return (
     <input onKeyUp={this.capturePassword} type="password" />
   )
 }

}

export default Keypad;
