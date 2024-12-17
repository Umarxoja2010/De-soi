import React from 'react'
import "../style/hero2.css"
import Hero2_card from './Hero2_card'
import rasm2 from "../img/#.png"
import rasm3 from "../img/stars.svg"

function Hero2() {
  return (
<section className='hero2'>
    <div className="container">
        <h1>Shop beverages</h1>
        <div className="hero2_wrapper">
            <div className="her2_con1">
                <h2>Variety Pack</h2>
                <span>-  Delicate and lean to sip -</span>
                <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
                <p>Adaptogenic ingredients:  Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            </div>
            <div className="hero2_con2">
            <Hero2_card span="Bottle" rasm={rasm2}/>

            </div>
            <div className="hero2_con3">
                <Hero2_card span="Can" rasm={rasm3}/>
            </div>
        </div>    </div>
</section>
  )
}

export default Hero2
