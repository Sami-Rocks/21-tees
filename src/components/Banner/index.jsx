import React from 'react'
import './style.scss'
import { useHistory } from 'react-router';


const Banner = (props) =>{

    const history = useHistory();

    const navigate= ()=> {
        history.push("/custom-design");
      }
    

    return(
        <div className={`banner ${props.shop !== undefined ? 'shop_banner' : ''} ` }>
            <div className="container">
                <div className={`big-text ${props.shop !== undefined ? 'center' : ''} ` } >
                    <h1>
                        { props.shop === undefined ? <>DO YOU HAVE YOUR <br/>
                        OWN DESIGN?</> : props.shop.name }
                        
                    </h1>

                    {props.shop === undefined ?  <button className="button secondary-button" onClick={navigate} >
                        SHOW US
                    </button> : ''}
                   
                </div>
            </div>
        </div>
    )
}

export default Banner