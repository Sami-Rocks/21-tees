import React, { useEffect, useState } from 'react'
import ProductItem from '../../components/ProductItem';
import ProductItemSkeleton from '../../components/ProductItemSkeleton';
import './style.scss'
import firebase from 'firebase/app';
import 'firebase/firestore';
import { productsData } from '../../data';

const ProductList = (props) =>{

    const tees = firebase.firestore().collection('tees');
    const [products, setProducts] = useState([])

    useEffect(()=>{
        if(props.shop === undefined){
            setProducts(productsData)
        }else{
            const shop = props.shop
            const shopData = productsData.filter(item => item.shop === shop.id)
            setProducts(shopData)
        }
    },[props.shop])

    useEffect(()=>{
        if(props.activeCapsule === ''){
            setProducts(productsData)
        }else{
            const activeCapsule = props.activeCapsule
            const shopData = productsData.filter(item => item.tag.includes(activeCapsule) )
            setProducts(shopData)
        }
    },[props.activeCapsule])


    // useEffect(()=>{
    //     tees.get()
    //         .then((snapshot) => {
    //             const data = snapshot.docs.map((doc) => ({
    //             id: doc.id,
    //             ...doc.data(),
    //             }));
    //             setProducts(data)
    //         });
    // },[tees])

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