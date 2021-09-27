import { createRef } from "react"
import "./style.scss"

const Capsules = () => {

    const scrollRef = createRef()

    const scroll = (direction) =>{
        if(direction === 'left'){
            scrollRef.current.scrollLeft += 200
        }else{
            scrollRef.current.scrollLeft -= 200
        }
    }

    return(
        <div className="capsules" >
            <div className="scroll left-scroll" onClick={()=>(scroll("right"))} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            <div className="scroll-container" ref={scrollRef}>
                <div className="gap">{"s"}</div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="capsule">
                    <p>Cap</p>
                </div>
                <div className="capsule">
                    <p>Capu</p>
                </div>
                <div className="capsule">
                    <p>Capsules</p>
                </div>
                <div className="gap">{"s"}</div>
            </div>

            <div className="scroll right-scroll" onClick={()=>(scroll("left"))} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-right" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                </svg>
            </div>
        </div>
    )
}

export default Capsules