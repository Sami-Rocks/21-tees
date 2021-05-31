import React from 'react'
import './Banner.scss'
import { useHistory } from 'react-router';


const Banner = () =>{

    const history = useHistory();

    const navigate= ()=> {
        history.push("/custom-design");
      }
      

    return(
        <div className="banner">
            <div className="container">
                <div className="big-text" >
                    <h1>
                        DO YOU HAVE YOUR<br/>
                        OWN DESIGN?
                    </h1>
                    <button className="button primary-button" onClick={navigate} >
                        SHOW US
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Banner