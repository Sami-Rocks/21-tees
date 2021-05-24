import React from 'react'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import './ProductDetails.scss'
import LightGrey from './../.../../../assets/images/light-grey.png'
import DarkGrey from './../.../../../assets/images/dark-grey.png'
import Dark from './../.../../../assets/images/dark.png'


const ProductDetails = () => {
    return(
        <div className="product-detail" >
            <div className="container">
                <div className="product-image">
                    <img src={Tshirt} alt="product" />
                </div>
                <div className="product-options">
                    <div className="title">
                        <h2 >AWESOME PRODUCT NAME</h2>
                    </div>
                    <div className="options">
                        <div className="brand">
                            <div className="option-title" >1. Brand</div>
                            <div class="wrapper">
                                <input type="radio" name="brand" value="gildan" id="gildan" checked />
                                <label for="gildan" class="option gildan">
                                    <span>GILDAN</span>
                                </label>
                            </div>
                        </div>
                        <div className="size">
                            <div className="option-title" >2. Size</div>
                            <div class="wrapper">
                                <input type="radio" name="size" value="S" id="S" checked />
                                <input type="radio" name="size" value="M" id="M" />
                                <input type="radio" name="size" value="L" id="L" />
                                <input type="radio" name="size" value="XL" id="XL" />
                                <label for="S" class="option S" >
                                    <span>S</span>
                                    </label>
                                <label for="M" class="option M">
                                    <span>M</span>
                                </label>
                                <label for="L" class="option L">
                                    <span>L</span>
                                </label>
                                <label for="XL" class="option XL">
                                    <span>XL</span>
                                </label>
                            </div>
                        </div>
                        <div className="color" >
                        <div className="option-title" >3. Color</div>
                        <div class="wrapper">
                                <input type="radio" name="color" value="white" id="white" checked />
                                <input type="radio" name="color" value="dark-grey" id="dark-grey" />
                                <input type="radio" name="color" value="light-grey" id="light-grey" />
                                <input type="radio" name="color" value="dark" id="dark" />
                                <label for="white" class="option white" >
                                    <span></span>
                                    </label>
                                <label for="dark-grey" class="option dark-grey">
                                        <img src={DarkGrey} alt="dark-grey" />
                                </label>
                                <label for="light-grey" class="option light-grey">
                                    <img src={LightGrey} alt="dark-grey" />
                                </label>
                                <label for="dark" class="option dark">
                                    <img src={Dark} alt="dark-grey" />
                                </label>
                            </div>
                        </div>
                    </div>
                    <div className="price">
                        <p> <span>GHC</span> 25.00</p>
                    </div>
                    <button className="button primary-button" >ADD TO CART</button>
                </div>
            </div>
            <div className="icon">
                <img src={Icon} alt="icon"/>
            </div>
        </div>
    )
}

export default ProductDetails