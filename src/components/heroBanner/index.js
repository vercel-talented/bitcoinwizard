import React from 'react'
import './heroBanner.scss';

const HeroBanner = () => {
  return (
    <div className='hero-banner-design'>
      <div className='container'>
        <div className='first-header-alignment'>
        <img src="https://www.bitcoinwizard.com/wp-content/uploads/2021/03/magicinternetmoney.png" />
      <div className='relative'>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M0 24C0 10.7 10.7 0 24 0H69.5c22 0 41.5 12.8 50.6 32h411c26.3 0 45.5 25 38.6 50.4l-41 152.3c-8.5 31.4-37 53.3-69.5 53.3H170.7l5.4 28.5c2.2 11.3 12.1 19.5 23.6 19.5H488c13.3 0 24 10.7 24 24s-10.7 24-24 24H199.7c-34.6 0-64.3-24.6-70.7-58.5L77.4 54.5c-.7-3.8-4-6.5-7.9-6.5H24C10.7 48 0 37.3 0 24zM128 464a48 48 0 1 1 96 0 48 48 0 1 1 -96 0zm336-48a48 48 0 1 1 0 96 48 48 0 1 1 0-96z"/></svg>
    <div className='counter'>1</div>
      </div>
      <div>
    </div>
        </div>
        <div className='grid'>
          <div className='grid-items'>
          <h1>Freshly Minted: Bitcoin Wizards: Ordinals</h1>
          <p className='spacer'>
            Bitcoin Wizards is a bitcoin ordinal NFT project celebrating the 10th anniversary of the original Bitcoin 
            Wizard created by mavensbot.
          </p>
          <p>
            Magic Internet Money is the iconic ad that promoted the bitcoin subreddit. Originally created on Mon Feb 18 2013 @ 23:21:15 by u/mavensbot, it soon 
            became the most popular ad on reddit.
          </p>
          <p>
            mavensbot is the original digital artist behind the Magic Internet 
            Money: Bitcoin Wizard.
          </p>
          </div>
          <div className='grid-items hero-image-style'>
            <img src="https://www.bitcoinwizard.com/wp-content/uploads/2017/04/smartphone-1-1.png?id=396"/>
            <img src='https://www.bitcoinwizard.com/wp-content/uploads/2017/04/6eciNFqao1kCEcJzGFuXSJfsDw445Jbet9sQliu4_-A.jpg'/>
          </div>
        </div>
        
      </div>
    </div>
  )
}

export default HeroBanner