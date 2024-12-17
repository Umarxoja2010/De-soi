import React from 'react'
import Hour_card from './Hour_card'
import Hero2_card from './Hero2_card'
import rasm1 from "../img/#.png"
import rasm2 from "../img/lmn.png"
import Hour_img_c from './Hour_img_c'
import "../style/lifest.css"
function Lifest() {
  return (
   <section className='lifest'>
    <div className="container">
<div className="lifest_wrapper">
    <div className="lifest_con1">
        <Hour_card soz="Medium - bodied"/>
    </div>
    <div className="lifest_con2">
        <Hero2_card rasm={rasm1} span="Bottle"/>
    </div>
    <div className="lifest_con3">
        <Hour_img_c img={rasm2} text="New lifestyle"/>
    </div>
</div>
    </div>
   </section>
  )
}

export default Lifest
