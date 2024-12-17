import React from 'react'
import "../style/page3.css"
import rasm1 from "../img/#.png"
import rasm2 from "../img/black_fidback.svg"
import rasm3 from "../img/black_pick.svg"
import rasm4 from "../img/black_emile.svg"
import rasm5 from "../img/prelis.png"

function Page3() {
  return (
 <section className='page3'>
    <div className="container">
        <div className="page3_wrapper">
            <div className="page_3_con1">
                <span>Non-Alcoholic drink</span>
                <h2>Medium - bodied</h2>
                <span>Light and easy to sip</span>
                <img src={rasm1} alt="" />
                <p>
                Made with natural birch, Strawberry and Apricot, <br /> an earthy and fruity taste. <br />

・100% Natural ingredients <br />
・Low Calories <br />
・Perfect for every occassion <br />
                </p>         
<div>
    <span>Share on</span>
    <img src={rasm2} alt="" />
    <img src={rasm3} alt="" />
    <img src={rasm4} alt="" />
</div>
<span className='s'>Shop the can</span>
            </div>
            <div className="page_3_con2">
                <img src={rasm5} alt="" />
            </div>
            <div className="page_3_con3">
                <h4>$35.59</h4>
                <span>adaptogenic Ingredients</span>
                <div>
                    <span>Strawberry</span>
                    <span>Birch</span>
                    <span>Apricot</span>
                </div>
                <span>Quantity</span>
                <p>Complimentary domestic shipping on 2+ bottles.</p>
                <div>
                    <span>1</span>
                    <span>2</span>
                    <span>3</span>
                    <span>6</span>
                    <span>12</span>
                </div>
                <p>Free domestic shipping over $50</p>
                <button>Add to bag</button>
            <div className="pag3_bottom">
                <span>Details</span>
                <span>+</span>
                </div>     
            <div className="pag3_bottom">
                <span>Full Ingredients</span>
                <span>+</span>
                </div>     
            <div className="pag3_bottom">
                <span>Product features</span>
                <span>+</span>
                </div>     
            </div>
        </div>
    </div>
 </section>
  )
}

export default Page3
