import React from 'react'
import './Banner.scss'

const Banner = () =>{
    return(
        <div className="banner">
            <div className="container">
                <div className="big-text" >
                    <h1>
                        DO YOU HAVE YOUR<br/>
                        OWN DESIGN?
                    </h1>
                    <button className="button primary-button" >
                        SHOW US
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner