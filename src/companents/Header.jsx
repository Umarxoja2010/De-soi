import React, { useRef } from 'react'
import "../style/header.css"
import pastga from "../img/pastga_strelka.svg"
import header_icon from "../img/header_icon.svg"
import usa from "../img/header_usa.svg"
import block from "../img/block.svg"
import burger from "../img/header_burgaer.svg"
import { NavLink } from 'react-router-dom'
function Header() {
  let modal=useRef()
function openModal (){
modal.current.classList.add("openModal")
}

function closeModal(){
modal.current.classList.remove('openModal')
}

  return (
<header className='header'>
  <div ref={modal} className="modal">
    <button onClick={closeModal}>X</button>
  <div>
    <NavLink to="/shop">
    Shop
    </NavLink>
      <img src={pastga} alt="" />
      </div>
      <span>About</span>
      <div>
        <span>Fun stuff</span>
        <img src={pastga} alt="" />
      </div>
      <span>Find us</span>
  </div>
<div className="container">
  <div className="header_wrapper">
    <div className="header_otgich">
      <div>
 <NavLink to="/shop">
     Shop
 </NavLink>
      <img src={pastga} alt="" />
      </div>
      <span>About</span>
      <div>
        <span>Fun stuff</span>
        <img src={pastga} alt="" />
      </div>
      <span>Find us</span>
    </div>
    <div className="header_mobile" onClick={openModal} >
  <img className='burger' src={burger} alt="" />

    </div>
    <div className="header_icon">
      <NavLink to="/">
      <img src={header_icon} alt="" />

      </NavLink>
    </div>
    <div className="header_block">
      <div className="header_mobil">
      <div>
<img src={usa} alt="" />
<span>USA</span>
<img src={pastga} alt="" />
</div>
<div>
  <span>Contact</span>
  <span>Log in</span>
 
</div>
      </div>
      <NavLink to="/bag">
      <img src={block} alt="" />

      </NavLink>
    </div>
  </div>
</div>
</header>
  )
}

export default Header
