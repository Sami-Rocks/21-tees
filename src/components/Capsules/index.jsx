import { createRef, useContext } from "react"
import "./style.scss"
import { tags } from "../../data"
import { ActiveCapsuleContext } from "../../helpers/contexts"

const Capsules = () => {

    const { activeCapsule, setActiveCapsule } = useContext(ActiveCapsuleContext)

    const scrollRef = createRef()

    const scroll = (direction) =>{
        if(direction === 'left'){
            scrollRef.current.scrollLeft += 200
        }else{
            scrollRef.current.scrollLeft -= 200
        }
    }

    const activateCapsule = (id) => {
        setActiveCapsule(id)
    }

    return(
        <div className="capsules" >
            <div className="scroll left-scroll" onClick={()=>(scroll("right"))} >
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
                    <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                </svg>
            </div>
            <div className="scroll-container" ref={scrollRef}>
                <div className="gap">{" "}</div>

                {tags.map(tag=>{
                    return <div key={tag.id} className={`capsule ${activeCapsule === tag.id ? 'active ' : ''}`}  onClick={()=>activateCapsule(tag.id)} ><p>{tag.tag}</p></div>
                })}

               
                <div className="gap">{" "}</div>
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