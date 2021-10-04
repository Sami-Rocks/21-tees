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
                    <div className="close">
                        
                        <button className="button link-button close-button"  onClick={toggleSideBar}  >
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-arrow-left" viewBox="0 0 16 16">
                                <path fill-rule="evenodd" d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"/>
                            </svg>
                            close
                        </button>
                    </div>
                    <div className="title" >
                        MENU
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