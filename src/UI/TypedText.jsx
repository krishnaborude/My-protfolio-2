import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypedText() {
  return (
    <TypeAnimation
      sequence={[
        "I'm a Student.",
        1000, 
        "I'm a Python Developer.",
        1000, 
        "I'm a Data Scientist.",
        1000, 
      ]}
      wrapper="h3"
      speed={9}
      repeat={Infinity}
    />
  )
}

export default TypedText