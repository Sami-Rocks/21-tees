import React from 'react'
import { useForm } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import useLocalStorage from 'react-use-localstorage';
import './Checkout.scss' 
import firebase from 'firebase/app';
import 'firebase/firestore';

const Checkout = () =>{
    const history = useHistory();
    const cart = useSelector(state => state.cart)

    let [user, setUser] = useLocalStorage("user", '');
    if (user) {
        user = JSON.parse(user)
    }
    const { register, formState: { errors }, handleSubmit} = useForm();

    const onSubmit = data =>{
        setUser(JSON.stringify(data))
        console.log(data)
        data.product_details = cart

        firebase.firestore().collection("orders").add(data)
        goBack()
    }

    const goBack= ()=> {
      history.push("/");
    }
    return(
        <>
            <div className="small-banner">
                <p className="back"  onClick={goBack} >back to shop</p>
            </div>
            
            <div className="checkout">
                    <h2 className="title" >Complete form to complete your order.</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="container">
                            <div className="user-details-form">
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="fullName" 
                                        name="fullName" 
                                        defaultValue={user.fullName}
                                        required {...register('fullName',{ required: true, minLength: 8 })}/>
                                    <label htmlFor="fullName">Full Name</label>
                                    <p className='error'>
                                        {errors.fullName && "Error with your Name."}
                                    </p>
                                </div>
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="email" name="email" 
                                        defaultValue={user.email}
                                        required  {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g })}/>
                                    <label htmlFor="email">E-mail Address</label>
                                    <p className='error'>
                                        {errors.email && "Error with your E-mail."}
                                    </p>
                                </div>
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="phone" 
                                        name="phone"  
                                        defaultValue={user.phone}
                                                                               required  {...register('phone',{ required: true, minLength: 10, pattern: /\d/g })}/>
                                    <label htmlFor="phone">Phone Number</label>
                                    <p className='error'>
                                        {errors.phone && "Error with your Phone Number."}
                                    </p>
                                </div>
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="address" 
                                        name="address"  
                                        defaultValue={user.address}
                                        
                                        required {...register('address',{ required: true, minLength: 8 })}/>
                                    <label htmlFor="address">Residential Address</label>
                                    <p className='error'>
                                        {errors.address && "Error with Address."}
                                    </p>
                                </div>
                            </div>
                            <div className="payment-form">
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="number" 
                                        name="number"  
                                        defaultValue={user.number}
                                        
                                        required {...register('number',{ required: true, minLength: 10, pattern: /\d/g })}/>
                                    <label htmlFor="number">Mobile Money Number</label>
                                </div>
                                <div className="inputGroup">
                                    <input 
                                        type="text" 
                                        id="network" 
                                        name="network"  
                                        defaultValue={user.network}
                                    
                                        required {...register('network',{ required: true })}/>
                                    <label htmlFor="network">Network</label>
                                </div>
                                <button className="button secondary-button" >
                                    Pay <span >GHC</span> 25.00
                                </button>
                            </div>
                        </div>
                        <button type="submit" className="button primary-button" >
                                Complete Order
                        </button>
                    </form>
            </div>
        </>
    )
}

export default Checkout