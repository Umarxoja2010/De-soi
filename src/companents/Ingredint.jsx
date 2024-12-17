import React from 'react'
import "../style/ingrident.css"
import rasm1 from "../img/ing1.svg"
import rasm2 from "../img/ing2.svg"
import rasm3 from "../img/ing3.svg"
import rasm4 from "../img/ing4.svg"
import rasm5 from "../img/ing5.svg"
import rasm6 from "../img/ing6.svg"
function Ingredint() {
  return (
<section className='ingrident'>
    <div className="container">
<h2>Ingredients</h2>
<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. </p>
<span>Ingredient glossAry</span>
<div className="ingrident_wrapper">
    <div>
        <img src={rasm1} alt="" />
        <span>earl </span>
    </div>
    <div>
        <img src={rasm2} alt="" />
        <span>rose</span>
    </div>
    <div>
        <img src={rasm3} alt="" />
        <span>pear</span>
    </div>
    <div>
        <img src={rasm4} alt="" />
        <span>birch</span>
    </div>
    <div>
        <img src={rasm5} alt="" />
        <span> currant</span>
    </div>
    <div>
        <img src={rasm6} alt="" />
        <span>bergamot</span>
    </div>
</div>
    </div>
</section>
  )
}

export default Ingredint
