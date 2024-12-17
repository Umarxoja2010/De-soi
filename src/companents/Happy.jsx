import React from 'react'
import Hour_card from './Hour_card'
import Hour_img_c from './Hour_img_c'
import rasm from "../img/bakalcha.png"
import rasm1 from "../img/#.png"
import Hero2_card from './Hero2_card'
import "../style/happy.css"
function Happy() {
  return (
    <section className='happy'>
        <div className="container">
<div className="happy_wrapper">
    <div className="happy_con1">
        <Hour_card soz="Light - bodied"/>
    </div>
    <div className="happy_con2">
      <Hour_img_c text="Happy hour 
24/7" img={rasm} />

    </div>
    <div className="happy_con3">
      <Hero2_card rasm={rasm1} span="Bottle" />
    </div>
</div>
        </div>
    </section>
  )
}

export default Happy
