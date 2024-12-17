import React from 'react'
import "../style/enjoy.css"
import rasm1 from "../img/avakado.png"
function Enjoy() {
  return (
<section className='enjoy'>
    <div className="container">
        <div className="enjoy_wrapper">
            <div className="enjoy_left">
                <h1>How to enjoy</h1>
                <span>On the Rocks</span>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 

Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.</p>
            </div>
            <div className="enjoy_right">
                <img src={rasm1} alt="" />
            </div>
        </div>
    </div>
</section>
  )
}

export default Enjoy
