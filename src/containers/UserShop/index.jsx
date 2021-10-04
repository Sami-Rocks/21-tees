import ProductList from '../ProductList'
import './style.scss'
import {flower, facebook, twitter, instagram} from './../../helpers/socials'

const UserShop = () => {
    return(
        <div className="user-shop" >
            <div className="user-banner">
                <h1>SHOP LOGO</h1>
            </div>
            <div className="user-grid container">
                <div className="user-info">
                    <div className="shop-avatar">
                        {flower}
                    </div>
                    <h3>My Shop</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit, pariatur fugiat assumenda minus nulla illum iste consequatur expedita libero, repellat </p>
                    <div className="shop-socials">
                        {twitter}
                        {facebook}
                        {instagram}
                    </div>
                </div>
                <ProductList />
            </div>
        </div>
    )
}

export default UserShop