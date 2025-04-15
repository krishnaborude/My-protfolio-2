import React from 'react'
import SkillSvg from '../assets/skills.svg'

function Skills() {
  return (
    <section id='Skills'>
      <div className="container skills-container">
        <h4><span>Tools in My Arsenal</span></h4>
        <h4>Bringing ideas to life with pixels, code, and caffeine.</h4>
        <p>These tools help me turn blank screens into interactive experiences.</p>
        <img src={SkillSvg} alt="" />
      </div>
    </section>
  )
}

export default Skills