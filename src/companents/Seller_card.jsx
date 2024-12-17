import React from 'react'

function Seller_card({img,text,soz}) {
  return (
    <div className='seller_card'>
      <img src={img} alt="" />
      <h4>{soz}</h4>
      <p>Ut enim ad minim veniam, quis nostrud exerp ex ea commodo consequat. </p>
<a href="/pradakt"> {text} </a>
      </div>
  )
}

export default Seller_card
