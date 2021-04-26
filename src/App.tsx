import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Navi from './components/Header/Navi'
import Navigator from './components/Header/Navigator'
import { showCartItems } from './Global/Actions/CardAction/CardAction'
import { getAllProducts } from './Global/Actions/ProductAction/productAction'
import MainPages from './pages/MainPages'

const App = () => {
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(getAllProducts())
        dispatch(showCartItems())
    },[dispatch])
    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-lg-12 p-0">
                    <Navi />
                </div>
                <div className="col-lg-12 p-0">
                    <Navigator />
                </div>
            </div>
            <div className="row">
                <div className="col-lg-10 mx-auto">
                    <MainPages />
                </div>
            </div>
        </div>
    )
}

export default App
