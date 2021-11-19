import React from 'react'
import './style.scss'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import { Link } from 'react-router-dom';

const ProductItem = (product) => {
    const tee = product.product
    return(
        <div className="product-item">
            <Link to={`/product-details/${tee.id}`}>
                <div className="image-container">
                    <img src={tee.images.thumbnail} alt="product"/>
                </div>
                <div className="text-container">
                    <div className="product-name">
                        <p> {tee.name} </p>
                    </div>
                    <div className="icon" >
                        <img src={Icon} alt="icon" />
                    </div>
                    <div className="product-price">
                        <p> <span>GHC</span> {tee.price ? tee.price.toFixed(2) : tee.price} </p>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default ProductItem