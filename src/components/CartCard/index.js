import React, { useState } from 'react'
import './CartCard.scss'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import { useDispatch } from 'react-redux';
import { removeFromCart } from './../../Actions/'


const CartCard = () =>{

    const [numberOfShirts, setNumberOfShirts] = useState(1)
    const dispatch = useDispatch()

    let product = {id: "21"}

    const remove = (product) =>{
        dispatch(removeFromCart(product))
    }

    const increaseNumberOfShirt = () =>{
        setNumberOfShirts(prevNumer => prevNumer+ 1)
    }
    const decreaseNumberOfShirt = () =>{
        if(numberOfShirts !== 1){
            setNumberOfShirts(prevNumer => prevNumer- 1)
        }
    }

    return(
        <div className="cart-card">
            <div className="product-image">
                <img src={Tshirt} alt="shirt" />
            </div>
            <div className="product-details">
                <h2 className="product-name">
                    Awesome Product Name
                </h2>
                <p className='product-description' >
                    Dark grey, Extral Large, Gildan
                </p>
                <div className="product-number">
                    <button 
                    className="button special-button" 
                    onClick={decreaseNumberOfShirt}
                    >
                        -
                    </button>
                    <p className="number" >{numberOfShirts}</p>
                    <button 
                    className="button special-button" 
                    onClick={increaseNumberOfShirt}
                    >
                        +
                    </button>
                </div>
                <div className="product-price">
                    <p> <span>GHC</span> 25.00 </p>
                    <button className="button link-button" onClick={()=>remove(product)}  ><i> remove from cart</i></button>
                </div>
            </div>
            <img className="icon"  src={Icon} alt="Icons" />
        </div>
    )
}

export default CartCard