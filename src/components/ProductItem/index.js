import React from 'react'
import './ProductItem.scss'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'

const ProductItem = () => {
    return(
        <div className="product-item">
            <div className="image-container">
                <img src={Tshirt} alt="product"/>
            </div>
            <div className="text-container">
                <div className="product-name">
                    <p> Awesome product name adsfadsfasdf </p>
                </div>
                <div className="icon" >
                    <img src={Icon} alt="icon" />
                </div>
                <div className="product-price">
                    <p> <span>GHC</span> 25.00 </p>
                </div>
            </div>
        </div>
    )
}

export default ProductItem