
import Footer2 from "../Footer/Footer2"
import Navbar2 from "../Navbar/Navbar2"
import Carousel from "./Carousel/Carousel"
import Category from "./Category/Category"
import Merch from "./Merch/Merch"
import Offers from "./Offers/Offers"
import ProductCarousel from "./ProductCarousel/ProductSwipper"

const Content = () => {
    return(
        <>
        <Navbar2/>
        <Carousel/>
        <Offers/>
            <Merch />        
            <Category />
            <ProductCarousel/>
            <Footer2/>
        </>
    )
}

export default Content