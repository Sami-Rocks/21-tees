import React, { useContext } from 'react'
import { RightSideBarContext } from '../../helpers/SideBarContext'
import './RightSideBar.scss'

import CartCard from './../CartCard/';
import { useHistory } from 'react-router';
import { useSelector } from 'react-redux';


const RightSideBar = () =>{
    const { rightSideBar, setRightSideBar } = useContext(RightSideBarContext)
    const cart = useSelector(state => state.cart)


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
        history.push("/checkout/21")
    }

    const toggleSideBar = () =>{
        if(rightSideBar){
            setRightSideBar(false)
        }else{
            setRightSideBar(true)
        }
    }
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
                        <CartCard />
                        <CartCard />
                        <CartCard />
                        <CartCard />
                    </div>
                </div>
                <h2 className="total" > <span>TOTAL:  </span> <span className="currency">GHC</span> 25.00 </h2>
            <button className="button primary-button" onClick={checkout} >
                CHECKOUT
            </button>
            </div>
            <div className="side" onClick={toggleSideBar} ></div>
        </div>
    )
}

export default RightSideBar