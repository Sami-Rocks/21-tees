import React, { useEffect, useState } from 'react'
import ProductItem from './../../components/ProductItem';
import './ProductList.scss'
import firebase from 'firebase/app';
import 'firebase/firestore';

const ProductList = () =>{

    const tees = firebase.firestore().collection('tees');
    const [products, setProducts] = useState([])

    useEffect(()=>{
        tees.get()
            .then((snapshot) => {
                const data = snapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
                }));
                setProducts(data)
            });
    },[tees])

    return(
        <div className="product-list">
            {products.map((product, index) => (
                <ProductItem key={index} product={product} />
            ))}
        </div>
    )
}

export default ProductList