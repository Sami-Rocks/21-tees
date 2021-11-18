import { useContext } from "react"
import Banner from "../../components/Banner"
import Capsules from "../../components/Capsules"
import { ActiveCapsuleContext } from "../../helpers/contexts"
import ProductList from "../ProductList"

const AllShops = () =>{

    const { activeCapsule } = useContext(ActiveCapsuleContext)

    return(
        <div className="container">
            <Banner/>
            <Capsules />
            <ProductList  activeCapsule={activeCapsule} />
        </div>
    )
}

export default AllShops