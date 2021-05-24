import React, { useContext } from 'react'
import { LeftSideBarContext } from '../../helpers/SideBarContext';
import { RightSideBarContext } from '../../helpers/SideBarContext'
import './Header.scss'

const Header = () =>{
    const { leftSideBar, setLeftSideBar } = useContext(LeftSideBarContext)
    const { rightSideBar, setRightSideBar } = useContext(RightSideBarContext)

    const toggleLeftSideBar = () =>{
        if(leftSideBar){
            setLeftSideBar(false)
        }else{
            setLeftSideBar(true)
        }
    }
    const toggleRightSideBar = () =>{
        if(rightSideBar){
            setRightSideBar(false)
        }else{
            setRightSideBar(true)
        }
    }
    return (
        <header>
            <div className="header" >
                <div className="logo" onClick={toggleLeftSideBar} >
                    21TEES
                </div>
                <div className="header-buttons">
                    <div className="cart" onClick={toggleRightSideBar} >
                        CART
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header