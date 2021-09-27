import React from 'react'
import './style.scss'

const ProductItemSkeleton = () => {
    return(
        <div className="product-item skeleton">
                <div className="image-container skeleton-box"></div>
                <div className="text-container skeleton-box">
                        <p> </p>
                        <p></p>
                </div>
        </div>
    )
}

export default ProductItemSkeleton