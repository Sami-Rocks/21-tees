import Banner from "../../components/Banner"
import ProductList from "../ProductList"
import { useParams } from 'react-router'
import { shops } from "./../../data"

const Shop = () =>{

    const { shopId } = useParams()
    const allShop = shops

    const shop = allShop.find(item => item.id === parseInt(shopId))

    return(
        <div className="container">
            <Banner/>
            <ProductList  shop={shop} />
        </div>
    )
}

export default Shop