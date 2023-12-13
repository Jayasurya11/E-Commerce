import React from 'react'
import './DescriptionBox.css'
const DescriptionBox = () => {
  return (
    <div className='descriptionbox'>
        <div className="descriptionbox-navigator">
            <div className="descriptionbox-nav-box">
                Description
            </div>
            <div className="descriptionbox-nav-box fade">
                Reviews (122)
            </div>
        </div>
        <div className="descriptionbox-description">
            <p>An ecommerce website is your digital storefront on the internet. It facilitates the transaction between a buyer and seller. It is the virtual space where you showcase products, and online customers make selections. Your website acts as the product shelves, sales staff, and cash register of your online business channel.</p>
            <p>An ecommerce business uses digital methods to sell products and services to customers. Ecommerce businesses can be online-only or have a physical presence as well. Selling to customers online typically requires a website or digital storefront, plus a way to process payments digitally and ship orders to customers.</p>
        </div>
    </div>
  )
}

export default DescriptionBox