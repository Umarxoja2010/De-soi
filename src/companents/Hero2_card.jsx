import React from 'react'
import "../style/hero2_card.css"
import rasm1 from "../img/prelis.png"

function Hero2_card({span,rasm}) {
  return (
    <div className='hero2_card'>
        <img src={rasm1} alt="" />
        <div className="xon">
        <span>{span}</span>
<img src={rasm} alt="" />
<span>$35.59</span>
<a href="/pradakt">Shop now</a>
        </div>
    </div>
  )
}

export default Hero2_card
