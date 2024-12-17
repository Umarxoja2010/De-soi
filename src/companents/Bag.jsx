import React from 'react'
import "../style/bag.css"
import rasm1 from "../img/toggle.svg"
import rasm2 from "../img/prelis.png"
import rasm3 from "../img/minus.svg"
import rasm4 from "../img/pilus.svg"
function Bag() {
  return (
 <secion className="bag" >
    <div className="container">
<h1>My Bag</h1>
<div className="bag_mobile">
<div className="bag_mobile_left">
    <img src={rasm2} alt="" />
</div>
<div className="bag_mobile_right">
    <div className="bod">
        <h4>Medium-bodied</h4>
        <span>$28.00</span>
    </div>
    <div className="bodd">
        <span>1 bottle</span>
        <span>$30.00</span>
    </div>
    <p>Delivery every month</p>
    <div className="remov">
        <div>
            <img src={rasm3} alt="" />
            <span>2</span>
            <img src={rasm4} alt="" />
        </div>
        <span>remov</span>
    </div>
</div>
</div>
<div className="bag_mobile">
<div className="bag_mobile_left">
    <img src={rasm2} alt="" />
</div>
<div className="bag_mobile_right">
    <div className="bod">
        <h4>Medium-bodied</h4>
        <span>$28.00</span>
    </div>
    <div className="bodd">
        <span>1 bottle</span>
        <span>$30.00</span>
    </div>
    <p>Delivery every month</p>
    <div className="remov">
        <div>
            <img src={rasm3} alt="" />
            <span>2</span>
            <img src={rasm4} alt="" />
        </div>
        <span>remov</span>
    </div>
</div>
</div>
<div className="bag_wrapper">
    <div className="bag_con1">
        <div className='send'>
            <span>Sending a gift?</span>
            <span>Remove</span>
        </div>
        <div className="qolib">
            <p>Happy 25th Birthday Eddie! Hope you have a wonderful celebration!!!</p>
        </div>
        <button>save message</button>
        <a >Cancel</a>
    </div>
    <div className="bag_con2">
        <div className='sub_tot'>
            <span>Subtotal</span>
            <span>$99.18</span>
        </div>
        <p>Shipping & tax calculated at checkout</p>
        <p>$5.00 away from free shipping</p>
        <span className='chiziq'></span>
        <div className='div_wra'>
        <span>Package protection</span>
<label className='lab' htmlFor=""></label>
            <div className='m'>
            <span>For damage, lost & theft for $0.99</span>
<img src={rasm1} alt="" />

            </div>
        </div>
        <span className='chiziq'></span>
        <button>Checkout</button>
    </div>
    <div className="bag_con3">
<h2>You might also like</h2>
        <div className="toggle_wr">
            <div>
                <img src={rasm2} alt="" />
            </div>

            <div>
                <div className='fuul'>
                    <span>Full-bodied</span>
                    <span>$35.59</span>
                </div>
                <span className='sa'>1 bottle</span>
             <button>Add to cart</button>
            </div>
        </div>
    </div>
</div>
    </div>
 </secion>
  )
}

export default Bag
