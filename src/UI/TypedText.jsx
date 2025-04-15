import React from 'react'
import { TypeAnimation } from 'react-type-animation';

function TypedText() {
  return (
    <TypeAnimation
      sequence={[
        "I'm a Student.",
        1000, 
        "I'm a Frontend Developer.",
        1000, 
        "I'm a UI/UX designer.",
        1000, 
      ]}
      wrapper="h3"
      speed={10}
      repeat={Infinity}
    />
  )
}

export default TypedText