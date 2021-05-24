import React from 'react'
import './Header.scss'

const Header = () =>{
    return (
        <header>
            <div className="header" >
                <div className="logo">
                    21TEES
                </div>
                <div className="header-buttons">
                    <div className="cart">
                        CART
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header