import React from 'react'
import rasm1 from "../img/ing1.svg"
import rasm2 from "../img/ing3.svg"
import rasm3 from "../img/ing5.svg"
import "../style/hour.css"
import rasm4 from "../img/#.png"
import Hero2_card from './Hero2_card'
import Hour_card from './Hour_card'
import Hour_img_c from './Hour_img_c'
import rasm from "../img/olchaa.png"
function Hour() {
  return (
  <section className='hour'>
    <div className="container">
<div className="hour_wrapper">
    <div className="hour_content1">
      
     <Hour_card  soz="Light - bodied"/>
    </div>
    <div className="hour_con2">
      <Hour_img_c img={rasm} text="Rich in flavor"/>
    </div>
    <div className="hour_con3">
        <Hero2_card span="Bottle" rasm={rasm4}/>
    </div>
</div>
    </div>
  </section>
  )
}

export default Hour
