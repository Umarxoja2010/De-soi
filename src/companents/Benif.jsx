import React from 'react'
import "../style/benif.css"
import rasm1 from "../img/strawberry.png"
import rasm2 from "../img/treee.png"
import rasm3 from "../img/saftoli.png"
function Benif() {
  return (
   <section className='benif'>
    <div className="container">
        <div className="benif_top">
        <h2>Benefits and Ingredients</h2>
        <p>Benefits: Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
        </div>
        <div className="benif_bottom">
            <div className="benif_card1">
                <img src={rasm1} alt="" />
<h3>Strawberry</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className="benif_card2">
                <img src={rasm2} alt="" />
<h3>Birch</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
            <div className="benif_card3">
                <img src={rasm3} alt="" />
<h3>Apricot</h3>
<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.</p>
            </div>
        </div>
    </div>
   </section>
  )
}

export default Benif
