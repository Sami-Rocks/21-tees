import React, { useCallback, useContext, useEffect, useState } from 'react'
import { RightSideBarContext } from '../../helpers/SideBarContext'
import './RightSideBar.scss'

import CartCard from './../CartCard/';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';


const RightSideBar = () =>{
    const { rightSideBar, setRightSideBar } = useContext(RightSideBarContext)
    const cart = useSelector(state => state.cart)
    const [totalPrice, setTotalPrice] = useState(0)
    
    useEffect(()=>{
        if (cart.length === 0) return 0
        setTotalPrice(cart.map((item)=> item.numberOfShirts * item.product.price).reduce((a, b) => a+b))
    },[cart])

    const history = useHistory();
    if(!rightSideBar){
        return(
            <div className="off" >
                <div className="side-bar right-side-bar"></div>
            </div>
        )
    }


            
    const checkout = () =>{
        toggleSideBar();
        history.push("/checkout")
    }


    
    const toggleSideBar = () =>{
        if(rightSideBar){
            setRightSideBar(false)
        }else{
            setRightSideBar(true)
        }
    }
    const cartItems = cart.map((product, index)=>(
        <CartCard key={index} product={product} />
    ))
    const emptyCart = <p style={{textAlign: "center", color: "red", fontSize: "1rem", padding: "1rem"}} >Cart is Empty</p>
    return(
        <div className="side-bar right-side-bar">
            <div className="container">
                <div className="top">
                    <div className="title" >
                        CART
                    </div>
                    <div className="close">
                        <button className="button link-button close-button"  onClick={toggleSideBar}  >close</button>
                    </div>
                </div>
                <div className="content">
                    <div className="cart">
                        { cart.length === 0 ? emptyCart : cartItems}
                    </div>
                </div>

                <h2 className="total" > <span>TOTAL:  </span> <span className="currency">GHC</span> {totalPrice.toFixed(2)}</h2>
                <button className="button primary-button" onClick={checkout} >
                    CHECKOUT
                </button>
            </div>
            <div className="side" onClick={toggleSideBar} ></div>
        </div>
    )
}

export default RightSideBar