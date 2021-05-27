import React from 'react'
import { useHistory } from 'react-router';
import './Checkout.scss' 

const Checkout = () =>{
    const history = useHistory();

    const goBack= ()=> {
      history.push("/");
    }
    return(
        <>
            <div className="small-banner">
                <p className="back"  onClick={goBack} >back to shop</p>
            </div>
            <div className="checkout">
                <div className="container">
                    <div className="user-details-form">
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name" required />
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name" required />
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name"  required/>
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name"  required/>
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name"  required/>
                            <label htmlFor="full-name">Full Name</label>
                        </div>
                    </div>
                    <div className="payment-form">
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name"  required/>
                            <label htmlFor="full-name">Amount</label>
                        </div>
                        <div className="inputGroup">
                            <input type="text" id="full-name" name="full-name"  required/>
                            <label htmlFor="full-name">Newtwork</label>
                        </div>
                        <button className="button secondary-button" >
                            Pay
                        </button>
                    </div>
                </div>
                    <button className="button primary-button" >
                            Complete Order
                        </button>
            </div>
        </>
    )
}

export default Checkout