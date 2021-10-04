import React, { useContext } from 'react'
import { LeftSideBarContext } from '../../helpers/SideBarContext';
import { RightSideBarContext } from '../../helpers/SideBarContext'
import './style.scss'

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
                <div data-testid="logo" className="logo" >
                    <span className="menu" onClick={toggleLeftSideBar}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-list" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                        </svg>
                    </span>
                    <span>
                        21TEES
                    </span>
                </div>
                <div className="header-buttons">
                    <div data-testid="cart" className="cart" onClick={toggleRightSideBar} >
                        <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
                        </svg>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header