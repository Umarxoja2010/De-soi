import React from 'react'
import "../style/hour_card.css"

import rasm1 from "../img/ing1.svg"
import rasm2 from "../img/ing2.svg"
import rasm3 from "../img/ing3.svg"

function Hour_card({soz}) {
  return (
    <div className='hour_card'>
      <h2>{soz}</h2>
      <span>-  Delicate and lean to sip -</span>
        <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        <div className='ing_im'>
<img src={rasm1} alt="" />
<img src={rasm2} alt="" />
<img src={rasm3} alt="" />
        </div>
        <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    </div>
  )
}

export default Hour_card
