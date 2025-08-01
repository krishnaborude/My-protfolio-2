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
        "I'm a AI & ML Developer.",
        1000,
        "I'm a Web Developer.",
        1000,
        "I'm a Ethical Hacker.",
        1000,
      ]}
      wrapper="h3"
      speed={7}
      repeat={Infinity}
    />
  )
}

export default TypedText