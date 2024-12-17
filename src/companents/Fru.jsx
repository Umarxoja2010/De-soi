import React from 'react'
import "../style/fruti.css"
import rasm1 from "../img/sariq.png"
function Fru() {
  return (
    <section className='fruti'>
    <div className="container">
        <div className="fruti_wrapper">
            <div className="fruti_content">
                <span>Try this</span>
                <h2>Variety Pack</h2>
                <p>Don’t know what to choose? Our variety pack is a three-bottle kit with De Soi’s Light, Medium and Full bodied flavors. Taste all 3 flavors at once!  </p>
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

export default Fru
