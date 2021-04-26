import React from 'react'
import { useSelector } from 'react-redux'
import Product from '../../components/Product/Product'
import Searchbar from '../../components/Searchbar/Searchbar'
import { SingleProductDataType } from '../../Global/Actions/ProductAction/productActionTypes'
import { RootState } from '../../Global/Store'

const Home:React.FC = () => {

    const products = useSelector((state:RootState) => state.products.products)

    return (
        <div className="container">
            <div className="row mt-4">
                <Searchbar />
            </div>
            <div className="row mt-3">
                {
                    products === undefined ? <h4>Loading...</h4> :
                    products.map((product:SingleProductDataType) => <Product key={product.id} product={product} />)
                }
            </div>
        </div>
    )
}

export default React.memo(Home)
