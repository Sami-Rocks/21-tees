import React from 'react'
import { Link } from 'react-router-dom';
import ProductItem from './../../components/ProductItem';
import './ProductList.scss'

const ProductList = () =>{
    return(
        <div className="product-list">
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
                <ProductItem />
        </div>
    )
}

export default ProductList