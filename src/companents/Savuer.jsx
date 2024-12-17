import React from 'react'
import rasm1 from "../img/savuer_img1.svg"
import rasm2 from "../img/savuer_img2.svg"
import rasm3 from "../img/savuer_img3.svg"
import rasm4 from "../img/top back.svg"
import "../style/savuer.css"
import rasm5 from "../img/bottom back.svg"
function Savuer() {
  return (
  <section className='savuer'>
<div className="container">
<div className="savuer_wrapper">
    <div className="sauver_card">
    <img src={rasm4} alt="" />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <img src={rasm5} alt="" />
    <img src={rasm1} alt="" />
    </div>
    <div className="sauver_card">
    <img src={rasm4} alt="" />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <img src={rasm5} alt="" />
    <img src={rasm2} alt="" />
    </div>
    <div className="sauver_card">
    <img src={rasm4} alt="" />
    <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <img src={rasm5} alt="" />
    <img src={rasm3} alt="" />
    </div>
</div>
</div>
  </section>
  )
}

export default Savuer
