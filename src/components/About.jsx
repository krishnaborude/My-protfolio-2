import React from 'react'

import TypedText from '../UI/TypedText'

import { aboutData } from '../data/data'

function About() {
  return (
    <section id='About'>
        {
            aboutData.map(({yt,infoText,link,linkText,aboutPara},index)=>{
                return(
                    <div className="container about-container" key={index}>
                        <TypedText/>
                        <div className="info-text">
                            <p>{infoText}</p> 
                            <a href={link}><img src={yt} alt="" />{linkText}</a>
                        </div>

                        <p className='about-para'>{aboutPara}</p>
                    </div>
                )
            })
        }
    </section>
  )
}

export default About