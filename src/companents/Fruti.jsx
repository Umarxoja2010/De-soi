import React from 'react'
import "../style/fruti.css"
import rasm1 from "../img/fruiti.png"
function Fruti() {
  return (
    <section className='fruti'>
<div className="container">
    <div className="fruti_wrapper">
        <div className="fruti_content">
            <span>New in</span>
            <h2>Rich and fruity</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
            <a >Shop now</a>
        </div>
        <div className="fruti_img">
            <img src={rasm1} alt="" />
        </div>
    </div>
</div>
    </section>
  )
}

export default Fruti
