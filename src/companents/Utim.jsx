import React from 'react'
import "../style/utim.css"
import rasm1 from '../img/coctil.png'
function Utim() {
  return (
  <section className='utim'>
    <div className="container">
        <div className="utim_wrapper">
        <div className="utim_img">
    <img src={rasm1} alt="" />
</div>
<div className="utim_content">
    <span>Learn</span>
    <h2>Ut enim</h2>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
    <a href='/shop'>Shop now</a>
</div>
        </div>
    </div>
  </section>
  )
}

export default Utim
