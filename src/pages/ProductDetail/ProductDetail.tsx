import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getProductsForCategory, getSingleProduct } from '../../Global/Actions/ProductAction/productAction'
import { RootState } from '../../Global/Store'
import { useRouter } from '../../helpers/useRouter'

import {IoMdArrowRoundForward} from 'react-icons/io'
import { SingleProductDataType } from '../../Global/Actions/ProductAction/productActionTypes'
import Product from '../../components/Product/Product'




const ProductDetail = () => {
    const router = useRouter()
    const dispatch = useDispatch()

    const product = useSelector((state:RootState) => state.products.product)
    const products = useSelector((state:RootState) => state.products.products)

    useEffect(() => {
        dispatch(getSingleProduct(router.state))
        dispatch(getProductsForCategory(product?.category))
    },[dispatch,product?.category,router.state])


    return product === undefined ? <h4>Loading...</h4> : <div className="container  ">
            <div className="row">
                <div className="col-lg-10 mx-auto ">
                    <div className="card shadow-3">
                        <img className=" big-card-image " src={product.image} alt={product.title}/>
                        <div className="card-body row my-3">
                            <div className="col-lg-10 mx-auto">
                                <button
                                className="btn bg-blue text-white w-100 shadow-3 my-2"
                                >
                                    {product.price}$
                                </button>
                                <h4
                                className="text-center my-2"
                                >{product.title}</h4>
                            </div>
                            <div className="col-lg-5">
                                <ul className="list-group">
                                    <li className="list-group-item d-flex align-items-center justify-content-between">
                                        <h6 className=" fs-6 m-0 ">
                                            Category:
                                        </h6>
                                        <h6 className="fs-6 m-0 fw-bold">
                                            {product.category}
                                        </h6>
                                    </li>
                                </ul>
                            </div>
                            <div className="col lg-7">
                                <p className="text-justify">
                                    <IoMdArrowRoundForward fontSize={15} className="me-1"/>
                                    {product.description}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-lg-12 mx-auto">
                    <div className="container">
                        <div className="row">
                            {
                                products === undefined ? <h4>Loading...</h4> :
                                products.slice(0,4).map((product:SingleProductDataType) => <Product key={product.id} product={product} />)
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
}

export default React.memo(ProductDetail)
