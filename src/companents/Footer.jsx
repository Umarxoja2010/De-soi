import React from 'react'
import rasm1 from "../img/insta.svg"
import rasm2 from "../img/fidback.svg"
import rasm3 from "../img/picture.svg"
import rasm4 from "../img/svitter.svg"
import rasm5 from "../img/youtube.svg"
import "../style/footer.css"
function Footer() {
  return (
  <footer className='footer'>
    <div className="container">
<div className="footer_wrapper">
  <div className="footer_right">
    <h2>Newsletter</h2>
    <p>Sign up to save 10% on your next order</p>
    <input type="text" placeholder='Email Address' />
    <div className='footer_img'>
<img src={rasm1} alt="" />
<img src={rasm2} alt="" />
<img src={rasm3} alt="" />
<img src={rasm4} alt="" />
<img src={rasm5} alt="" />
    </div>
  </div>
  <div className="footer_left">
    <div>
      <span>explore</span>
      <ul>
        <li>Account</li>
        <li>Account</li>
        <li>Account</li>
        <li>Account</li>
        <li>Account</li>
      </ul>
    </div>
    <div>
      <span>get help</span>
      <ul>
        <li>Shop</li>
        <li>Shop</li>
        <li>Shop</li>
        <li>Shop</li>
      </ul>
    </div>
    <div>
      <span>Company</span>
      <ul>
      <li>About</li>
      <li>About</li>
      <li>About</li>
      <li>About</li>
      </ul>
    </div>
  </div>
</div>
<div className="footer_bottom">
  <span>/de · swa/</span>
  <span>®2021 Сocktail</span>
  <span>Privacy policy</span>
  <span>Terms of use</span>
  <span>AMASS</span>
</div>
    </div>
  </footer>
  )
}

export default Footer
