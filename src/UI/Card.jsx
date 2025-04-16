import React from 'react'
import './Ui.css'

function Card({CardIcon,CardName, CardInfo,CardLink}) {
  return (
    <article className='card'>
        <div className="card-icon">
            <img src={CardIcon} alt="" />
        </div>
        <div className="card-content">
            <h4>{CardName}</h4>
            <small>{CardInfo}</small>
            <a href={CardLink} className='card-btn'>View Certificate</a>
        </div>
    </article>
  )
}

export default Card