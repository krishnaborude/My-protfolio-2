import { headData } from '../data/data'

import React from 'react'

function Header() {
  return (
    <header>
        {
            headData.map(({heroImage, intro, name , profession, hedingText1,hedingText2, hedingSp, pText},index) => {
                return (
                    <div className="container header-container" key={index}>
                        <div className="hero-image">
                            <img src={heroImage} alt="" />
                        </div>

                        <div className="hedare-right">
                            <div className="intro">
                                 <h5>{intro} <span>{name}</span></h5>
                            </div>
                            <h5 className='proffession'>{profession}</h5>
                            <h1 className='headingtext'>{hedingText1}</h1>
                            <h1 className='headingtext1'>{hedingText2} <span>{hedingSp}</span></h1>
                            <p>{pText}</p>
                        </div>
                    </div>
                );
            })
        }
    </header>
        
  )
}

export default Header