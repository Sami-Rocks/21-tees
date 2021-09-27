import Banner from "../../components/Banner"
import Capsules from "../../components/Capsules"
import ProductList from "../ProductList"

const Shop = () =>{
    return(
        <div className="container">
            <Banner/>
            <Capsules />
            <ProductList />
        </div>
    )
}

export default Shop