import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getAllCategories } from '../../Global/Actions/CategoryAction/categoryAction'
import { getProductsForCategory } from '../../Global/Actions/ProductAction/productAction'
import { RootState } from '../../Global/Store'

const Category = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllCategories())
    },[dispatch])

    const categories = useSelector((state:RootState) => state.categories.categories)

    const handleClick = useCallback((item?:string) => {
        dispatch(getProductsForCategory(item))
    },[])


    return categories === undefined ? <h4>Loading</h4> :
        <>
            <li 
            className="nav-item">
                <button 
                onClick={() => handleClick()}
                className="btn nav-link">
                    All
                </button>
            </li>
            {
                categories.map(category => 
                <li 
                className="nav-item"
                key={category}>
                    <button 
                    onClick={() => handleClick(category)}
                    className="btn nav-link text-capitalize">
                        {category}
                    </button>
                </li>
                )
            }
        </>
}

export default React.memo(Category)
