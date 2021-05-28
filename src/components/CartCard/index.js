import React, { useState } from 'react'
import './CartCard.scss'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import { useDispatch, useSelector } from 'react-redux';
import { removeFromCart, updateCartItem } from './../../Actions/'


const CartCard = (product) =>{
    const dispatch = useDispatch()

   let tee = product.product
    const remove = (product) =>{
        dispatch(removeFromCart(product))
    }

    const increaseNumberOfShirt = () =>{
        tee.numberOfShirts = tee.numberOfShirts +1
        dispatch(updateCartItem(tee))
    }
    const decreaseNumberOfShirt = () =>{
        if(tee.numberOfShirts !== 1){
            tee.numberOfShirts = tee.numberOfShirts -1
            dispatch(updateCartItem(tee))
        }
    }

    return(
        <div className="cart-card">
            <div className="product-image">
                <img src={Tshirt} alt="shirt" />
            </div>
            <div className="product-details">
                <h2 className="product-name">
                    {tee.product.name}
                </h2>
                <p className='product-description' >
                   {tee.brand}, {tee.size}, {tee.color}
                </p>
                <div className="product-number">
                    <button 
                    className="button special-button" 
                    onClick={decreaseNumberOfShirt}
                    >
                        -
                    </button>
                    <p className="number" >{tee.numberOfShirts}</p>
                    <button 
                    className="button special-button" 
                    onClick={increaseNumberOfShirt}
                    >
                        +
                    </button>
                </div>
                <div className="product-price">
                    <p> <span>GHC</span> {tee.product.price} </p>
                    <button className="button link-button" onClick={()=>remove(tee)}  ><i> remove from cart</i></button>
                </div>
            </div>
            <img className="icon"  src={Icon} alt="Icons" />
        </div>
    )
}

export default CartCard