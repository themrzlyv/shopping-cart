import React, { useCallback, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'
import { RootState } from '../../Global/Store'
import Category from '../Category/Category'

import {MdRemoveShoppingCart} from 'react-icons/md'
import { deleteToCard } from '../../Global/Actions/CardAction/CardAction'

const Navi = () => {
    const dispatch = useDispatch()
    const [startTotal, setstartTotal] = useState(0)
    const cartlist = useSelector((state:RootState) => state.card.favorites)

    const handleDeleteItem = useCallback((id) => {
        dispatch(deleteToCard(id))
    },[])
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-blue shadow-1">
            <div className="container">
                <a className="navbar-brand" href="/">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav w-75 d-flex justify-content-center">
                        <Category />
                    </ul>
                    <ul className="navbar-nav d-flex justify-content-end w-25">
                        <li className="nav-item">
                            <NavLink className="nav-link" to="/">Home</NavLink>
                        </li>
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle d-flex align-items-center" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                Store 
                                <span className="ms-1 badge bg-danger">
                                    {cartlist?.length}
                                </span>
                            </a>
                            <ul style={{minWidth: '13rem'}} className="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                                {
                                    cartlist === undefined || cartlist.length === 0 ? 
                                    <li>
                                        <p className="m-0 dropdown-item">
                                            Cart is empty!
                                        </p>
                                    </li> 
                                    : 
                                    cartlist.map(item => <li 
                                    className="dropdown-item d-flex align-items-center  justify-content-between" 
                                    key={Math.random()}>
                                        <img src={item.image} className=" img-fluid rounded-circle" style={{width: '1em'}} alt=""/>
                                        <p className="m-0">
                                            {item.title.slice(0,10)}
                                        </p>
                                        <button 
                                        onClick={() => handleDeleteItem(item.id)}
                                        className="border-0 bg-transparent text-danger p-0 d-flex align-items-center justify-content-center">
                                            <MdRemoveShoppingCart fontSize={18}/>
                                        </button>
                                    </li>) 
                                }
                                {
                                    cartlist === undefined || cartlist.length === 0 ?
                                    null
                                    :
                                    <li className="border-top w-100">
                                        <p className="m-0 dropdown-item d-flex align-items-center justify-content-between">
                                            Total 
                                            <span className="badge bg-success">
                                                {
                                                    cartlist.reduce((total,item) => total + item.price, startTotal)
                                                }$
                                            </span>
                                        </p>
                                    </li>
                                }
                            </ul>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    )
}

export default React.memo(Navi)
