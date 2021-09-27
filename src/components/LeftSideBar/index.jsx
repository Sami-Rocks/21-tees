import React, { useContext } from 'react'
import { LeftSideBarContext } from '../../helpers/SideBarContext'
import './style.scss'


const LeftSideBar = () =>{
    const { leftSideBar, setLeftSideBar } = useContext(LeftSideBarContext)

    if(!leftSideBar){
        return(
            <div className="off" >
                <div className="side-bar"></div>
            </div>
        )
    }

    const toggleSideBar = () =>{
        console.log(leftSideBar)
        if(leftSideBar){
            setLeftSideBar(false)
        }else{
            setLeftSideBar(true)
        }
    }
    console.log(leftSideBar)
    return(
        <div className="side-bar left-side-bar">
            <div className="container"  >
                <div className="top">
                    <div className="title" >
                        MENU
                    </div>
                    <div className="close">
                        <button className="button link-button close-button"  onClick={toggleSideBar}  >close</button>
                    </div>
                </div>
                <div className="content">

                </div>
            </div>
            <div className="side" onClick={toggleSideBar} ></div>
        </div>
    )
}

export default LeftSideBar