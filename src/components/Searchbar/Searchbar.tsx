import React, { useCallback } from 'react'
import { useDispatch } from 'react-redux'
import { searchProducts } from '../../Global/Actions/ProductAction/productAction'

const Searchbar = () => {
    const dispatch = useDispatch()

    const handlesearch = useCallback((event:React.ChangeEvent<HTMLInputElement>) => {
        dispatch(searchProducts(event.target.value))
    },[])

    return (
        <div className="col-lg-12 d-flex justify-content-center">
            <input type="text" className="w-50 shadow-1 rounded" placeholder="Search product" onChange={(event:React.ChangeEvent<HTMLInputElement>) => handlesearch(event)}/>
        </div>
    )
}

export default React.memo(Searchbar)
