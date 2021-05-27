import React, { useContext } from 'react'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import './ProductDetails.scss'
import LightGrey from './../.../../../assets/images/light-grey.png'
import DarkGrey from './../.../../../assets/images/dark-grey.png'
import Dark from './../.../../../assets/images/dark.png'
import { useHistory } from 'react-router';
import { RightSideBarContext } from '../../helpers/SideBarContext';


const ProductDetails = () => {
    const history = useHistory();
    const { rightSideBar, setRightSideBar } = useContext(RightSideBarContext)

    const goBack = () =>{
          history.push("/");
    }

    const addToCart = () =>{
        goBack();
        toggleRightSideBar()
    }

    const toggleRightSideBar = () =>{
        if(rightSideBar){
            setRightSideBar(false)
        }else{
            setRightSideBar(true)
        }
    }

    return(
        <>
            <div className="small-banner">
                <p className="back" onClick={goBack} >back to shop</p>
            </div>
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
                                <div className="wrapper">
                                    <input type="radio" name="brand" value="gildan" id="gildan" defaultChecked />
                                    <label htmlFor="gildan" className="option gildan">
                                        <span>GILDAN</span>
                                    </label>
                                </div>
                            </div>
                            <div className="size">
                                <div className="option-title" >2. Size</div>
                                <div className="wrapper">
                                    <input type="radio" name="size" value="S" id="S" defaultChecked />
                                    <input type="radio" name="size" value="M" id="M" />
                                    <input type="radio" name="size" value="L" id="L" />
                                    <input type="radio" name="size" value="XL" id="XL" />
                                    <label htmlFor="S" className="option S" >
                                        <span>S</span>
                                        </label>
                                    <label htmlFor="M" className="option M">
                                        <span>M</span>
                                    </label>
                                    <label htmlFor="L" className="option L">
                                        <span>L</span>
                                    </label>
                                    <label htmlFor="XL" className="option XL">
                                        <span>XL</span>
                                    </label>
                                </div>
                            </div>
                            <div className="color" >
                            <div className="option-title" >3. Color</div>
                            <div className="wrapper">
                                    <input type="radio" name="color" value="white" id="white" defaultChecked />
                                    <input type="radio" name="color" value="dark-grey" id="dark-grey" />
                                    <input type="radio" name="color" value="light-grey" id="light-grey" />
                                    <input type="radio" name="color" value="dark" id="dark" />
                                    <label htmlFor="white" className="option white" >
                                        <span></span>
                                        </label>
                                    <label htmlFor="dark-grey" className="option dark-grey">
                                            <img src={DarkGrey} alt="dark-grey" />
                                    </label>
                                    <label htmlFor="light-grey" className="option light-grey">
                                        <img src={LightGrey} alt="dark-grey" />
                                    </label>
                                    <label htmlFor="dark" className="option dark">
                                        <img src={Dark} alt="dark-grey" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <div className="price">
                            <p> <span>GHC</span> 25.00</p>
                        </div>
                        <button className="button primary-button" onClick={addToCart} >ADD TO CART</button>
                    </div>
                </div>
                <div className="icon">
                    <img src={Icon} alt="icon"/>
                </div>
            </div>
        </>
    )
}

export default ProductDetails