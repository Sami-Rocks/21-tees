import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem';
import ProductItemSkeleton from '../../components/ProductItemSkeleton';
import './style.scss'
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

    const items =  products.map((product, index) => (
        <ProductItem key={index} product={product} />
    ))

    const skeleton = <><ProductItemSkeleton /> <ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /><ProductItemSkeleton /></>
    return(
        <div className="product-list">
            {/* {skeleton} */}
            { products.length === 0 ? skeleton : items }
        </div>
    )
}

export default ProductList