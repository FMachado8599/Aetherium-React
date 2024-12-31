import React from 'react'
import Cart from '../Cart.jsx'
import LanguageSelector from '../LanguageSelector.jsx'

const Menu = () => {
  return (
    <div className='nav-menu'>
        <LanguageSelector/>
        <Cart/>
    </div>
  )
}

export default Menu
