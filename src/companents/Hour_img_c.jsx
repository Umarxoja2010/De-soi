import React from 'react'
import "../style/hour_img_c.css"
function Hour_img_c({img,text})  {
  return (
    <div className='hour_img_c' style={{backgroundImage:`url(${img})`}}>
   <h2>{text}</h2>
    </div>
  )
}

export default Hour_img_c
