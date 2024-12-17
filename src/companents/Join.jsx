import React from 'react'
import "../style/join.css"
import rasm1 from "../img/join1.png"
import rasm2 from "../img/join2.png"
import rasm3 from "../img/join3.png"
import rasm4 from "../img/join4.png"
function Join() {
  return (
   <section className='join'>
    <h1>Join us @сocktail</h1>
    <div className="join_wrapper">
<img src={rasm1} alt="" />
<img src={rasm2} alt="" />
<img src={rasm3} alt="" />
<img src={rasm4} alt="" />
    </div>
   </section>
  )
}

export default Join
