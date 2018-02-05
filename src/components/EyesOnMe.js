// Code EyesOnMe Component Here
import React, { Component } from 'react'

const EyesOnMe = () => {


  return (
    <button onFocus={() => console.log('Good!')} onBlur={() => console.log('Hey! Eyes on me!')}></button>
  )
}

export default EyesOnMe
