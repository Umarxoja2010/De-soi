import React from 'react'
import "../style/seller.css"
import rasm1 from "../img/seller_qizil.svg"
import rasm2 from "../img/seller_pushti.svg"
import rasm3 from "../img/seller_sariq.svg"
import rasm4 from "../img/seller_qulrang.svg"
import Seller_card from './Seller_card'
function Seller() {
  return (
  <section className='seller'>
<div className="container">
<h2>Our best sellers</h2>
<div className="seller_wrapper">
<div>
<Seller_card img={rasm1} soz="Ipsum dolor" text="Shop now  "/>
</div>
<div>
<Seller_card img={rasm2} soz="Consectetur adipiscing" text="Shop now  "/>
</div>
<div>
<Seller_card img={rasm3} soz="Consequat" text="Shop now "/>
</div>
<div>
<Seller_card img={rasm4} soz="Commodo" text="Shop now  "/>
</div>
</div>

</div>
  </section>
  )
}

export default Seller
