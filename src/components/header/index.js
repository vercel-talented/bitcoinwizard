import React from 'react'
import './header.css';


const Header = () => {
  return (
    <div className='header-main'>

      <div className='header-logo'>
        <img src="https://www.bitcoinwizard.com/wp-content/uploads/2021/03/magicinternetmoney.png" />
      </div>
      <div className='header-shop-section'>
        <div className="header-shop-icon">
          <i class="minicart-icon porto-icon-shopping-cart"></i>

        </div>
        <div className="social-icon">
          <img src=""/>

        </div>
      </div>
    </div>
  )
}

export default Header