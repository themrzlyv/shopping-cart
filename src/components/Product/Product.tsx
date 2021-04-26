import React, { useCallback } from 'react'
import { SingleProductDataType } from '../../Global/Actions/ProductAction/productActionTypes'


import {MdFavoriteBorder} from 'react-icons/md'
import {BsArrowReturnRight} from 'react-icons/bs'

import  styles from './Product.module.scss'
import { NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCard } from '../../Global/Actions/CardAction/CardAction'

interface Iprops {
    product:SingleProductDataType
}

const Product:React.FC<Iprops> = ({product}) => {
    const dispatch = useDispatch()

    const addToCart = useCallback((product) => {
        dispatch(addToCard(product))
    },[])


    return (
        <div className="col-lg-3 my-2">
            <div className="card shadow-1 rounded-3 position-relative">
                <img className={`card-img-top ${styles.cardImage}`} src={product.image} alt={product.title}/>
                <div className="card-body">
                    <span className={`badge bg-warning ${styles.cardBadge} shadow-3`}>
                        {product.category}
                    </span>
                    <button
                    onClick={() => addToCart(product)}
                    className={`${styles.cardFavorite}`}>
                        <MdFavoriteBorder fontSize={25} />
                    </button>
                    <h5 className="fw-bold fs-6 border-bottom">Price: {product.price}</h5>
                    <p className={`fw-normal fst-italic mb-0 ${styles.secondaryText}`}>
                        <BsArrowReturnRight fontSize={15} />
                        {
                            product.title.length > 25 ?
                            product.title.slice(0,20) : product.title
                        }
                        ...
                    </p>
                </div>
                <NavLink 
                    to={{pathname: `/product/${product.title.replace("/","")}` , state: product.id}}
                    className="p-0 border-0 shadow-1 rounded-3 btn btn-success">
                        View
                    </NavLink>
            </div>
        </div>
    )
}

export default React.memo(Product)
