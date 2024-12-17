import React from 'react'
import "../style/tom.css"
import rasm1 from "../img/jajigalka.png"
import rasm2 from "../img/yarim.png"
function Tom() {
  return (
<section className='tom'>
    <div className="container">
<div className="tom_wrapper">
    <div className="tom_card1">
<img src={rasm1} alt="" />
    </div>
    <div className="tom_card2">
        <h2>Tom Collins Jr.</h2>
        <span>Ingredients</span>
        <p>3 oz Riverine
3/4 oz Lemon Juice
3/4 oz Simple Syrup
Club Soda</p>
<h4>View Full recipe</h4>
    </div>
    <div className="tom_card3">
        <img src={rasm2} alt="" />
    </div>
</div>
    </div>
</section>
  )
}

export default Tom
