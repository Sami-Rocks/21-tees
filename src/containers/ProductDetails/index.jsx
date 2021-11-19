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

    const [ displayShirt, setDisplayShirt ] = useState()

    // const tee = firebase.firestore().collection('tees').doc(id);

    // useEffect(()=>{
    //     tee.get().then((doc) =>{
    //         if(!doc.exists) return;
    //         setProduct(doc.data())
    //     })
    // },[tee])

    const [availableSizes, setAvailableSizes] = useState([])
    let [availableBrands, setAvailableBrands] = useState([])
    let [availableColors, setAvailableColors ] = useState([])

    useEffect(() => {
        const pro = productsData.find(item => item.id === parseInt(id) )
        setProduct(pro)
        setDisplayShirt(Object.values(pro.images)[ Object.keys(pro.images).length - 1])
        setAvailableSizes(sizes.filter(item => pro.size.includes(item.id) ))
        setAvailableBrands(brands.filter(item => pro.brands.includes(item.id) ))
        setAvailableColors(colors.filter(item => pro.colors.includes(item.id) ))

    }, [id])

    const onSubmit = data =>{
        data.product = product
        data.id = id
        data.numberOfShirts = 1
        goBack();
        toggleRightSideBar()
        dispatch(addToCart(data))
 
    }
    const changeColor = (color) => {
        setDisplayShirt(product.images[color])
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
                            <img src={displayShirt} alt="product" />
                        </div>
                        <div className="product-options">
                            <div className="title">
                                <h2 >{product.name}</h2>
                            </div>
                            <div className="options">
                                <div className="brand">
                                    <div className="option-title" >1. Brand</div>
                                    <div className="wrapper">
                                        {
                                            availableBrands.map(brand=>{
                                                return (<>
                                                    <input 
                                                        type="radio" 
                                                        name="brand" 
                                                        value={brand.brand} 
                                                        id={brand.brand} 
                                                        defaultChecked
                                                        {...register("brand")} />
                                                    <label htmlFor={brand.brand} className={`option ${brand.brand}`}>
                                                        <span>{(brand.brand).toUpperCase()}</span>
                                                    </label>

                                                </>)
                                            })
                                        }
                                    </div>
                                </div>
                                <div className="size">
                                    <div className="option-title" >2. Size</div>
                                    <div className="wrapper">
                                    {
                                        availableSizes.map(size=>{
                                            return  (<>
                                                <input 
                                                    type="radio" 
                                                    name="size" 
                                                    value={size.size} 
                                                    id={size.size} 
                                                    defaultChecked
                                                    {...register("size")} />
                                                <label htmlFor={size.size} className={`option ${size.size}`} >
                                                    <span>{size.size}</span>
                                                </label>
                                                </>)
                                        })
                                    }
                                    </div>

                                </div>
                                <div className="color" >
                                <div className="option-title" >3. Color</div>
                                    <div className="wrapper">
                                        {
                                            availableColors.map(color=>{
                                                return(<>
                                                    <input 
                                                        type="radio" 
                                                        name="color" 
                                                        value={color.color} 
                                                        id={color.color} 
                                                        defaultChecked
                                                        {...register("color")}/>
                                                    <label htmlFor={color.color}  onClick={()=>changeColor(color.color)} style={{ background: `${color.code}`}} className={`option ${color.color}`} >
                                                        <span ></span>
                                                    </label>
                                                </>)
                                            })
                                        }
                                        
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