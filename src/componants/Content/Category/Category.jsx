import { useEffect, useState } from "react"
import "./Category.css"

const Category = () => {
    const [products, setproducts] = useState([])
    const [categorys, setCategorys] = useState([])


    useEffect(() => {
        fetch("../../../../data.json")
        .then(res => res.json())
        .then((res) => {
            setproducts(res)
        })
    }, [])

    products.map((product) => {
        if(!categorys.includes(product.category)){
            setCategorys([...categorys, product.category])
        }
    })
    console.log(categorys)


    return (
        <>
            <div className="container mt-3">
                <h1 className="text-dark fontStyle mb-4">Browse by category</h1>
                <div className="category-container container-fluid d-flex flex-row mb-5">
                    {categorys.length?categorys.map((category) => {
                        return (
                            <a className="category-href" href={location+'products'}>
                                <div className="category">
                                    <p>{category}</p>
                                </div>
                            </a>
                            
                        )
                    })
                    :<h1>No Categorys to show</h1>}
                </div>
            </div>

        </>
    )
}

export default Category