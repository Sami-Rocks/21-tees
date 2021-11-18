import React, { useContext, useEffect, useState } from 'react'
import Icon from './../../assets/images/icon.png';
import Tshirt from './../../assets/images/black-t-shirt-front-isolated.png'
import './style.scss'
import LightGrey from './../.../../../assets/images/light-grey.png'
import DarkGrey from './../.../../../assets/images/dark-grey.png'
import Dark from './../.../../../assets/images/dark.png'
import { useHistory, useParams } from 'react-router';
import { RightSideBarContext } from '../../helpers/contexts';
import { useForm } from 'react-hook-form';
import { addToCart } from '../../Actions'
import { useDispatch } from 'react-redux';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { productsData, sizes, colors, brands } from '../../data';

const ProductDetails = () => {
    const history = useHistory();
    const { rightSideBar, setRightSideBar } = useContext(RightSideBarContext)
    const { register, handleSubmit } = useForm()
    const dispatch = useDispatch()
    let {id} = useParams()
    const [product, setProduct] = useState([])

    // const tee = firebase.firestore().collection('tees').doc(id);

    // useEffect(()=>{
    //     tee.get().then((doc) =>{
    //         if(!doc.exists) return;
    //         setProduct(doc.data())
    //     })
    // },[tee])

    useEffect(() => {
        const pro = productsData.find(item => item.id === parseInt(id) )
        setProduct(pro)

    }, [id])

    const onSubmit = data =>{
        data.product = product
        data.id = id
        data.numberOfShirts = 1
        goBack();
        toggleRightSideBar()
        dispatch(addToCart(data))
 
    }

    const goBack = () =>{
          history.goBack();
    }

    const toggleRightSideBar = () =>{
        setRightSideBar(!rightSideBar)
    }

    return(
        <>
            <div className="small-banner">
                <p className="back" onClick={goBack} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-arrow-left" viewBox="0 0 16 16">
                            <path fillRule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                        </svg> 
                    back to shop
                </p>
            </div>
            <div className="product-detail" >
                        <form onSubmit={handleSubmit(onSubmit)} >
                <div className="container">
                        <div className="product-image">
                            <img src={Tshirt} alt="product" />
                        </div>
                        <div className="product-options">
                            <div className="title">
                                <h2 >{product.name}</h2>
                            </div>
                            <div className="options">
                                <div className="brand">
                                    <div className="option-title" >1. Brand</div>
                                    <div className="wrapper">
                                        <input 
                                            type="radio" 
                                            name="brand" 
                                            value="gildan" 
                                            id="gildan" defaultChecked {...register("brand")} />
                                        <label htmlFor="gildan" className="option gildan">
                                            <span>GILDAN</span>
                                        </label>
                                    </div>
                                </div>
                                <div className="size">
                                    <div className="option-title" >2. Size</div>
                                    <div className="wrapper">
                                        
                                        <input type="radio" name="size" value="S" id="S" defaultChecked {...register("size")} />
                                        <input type="radio" name="size" value="M" id="M" {...register("size")}/>
                                        <input type="radio" name="size" value="L" id="L" {...register("size")}/>
                                        <input type="radio" name="size" value="XL" id="XL" {...register("size")}/>
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
                                        <input type="radio" name="color" value="white" id="white" defaultChecked {...register("color")}/>
                                        <input type="radio" name="color" value="dark-grey" id="dark-grey" {...register("color")}/>
                                        <input type="radio" name="color" value="light-grey" id="light-grey" {...register("color")}/>
                                        <input type="radio" name="color" value="dark" id="dark" {...register("color")}/>
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
                                <p> <span>GHC</span> {product.price ? product.price.toFixed(2) : product.price}</p>
                            </div>
                            <button className="button primary-button" >ADD TO CART</button>

                        </div>
                </div>
                    </form>
                <div className="icon">
                    <img src={Icon} alt="icon"/>
                </div>
            </div>
        </>
    )
}

export default ProductDetails