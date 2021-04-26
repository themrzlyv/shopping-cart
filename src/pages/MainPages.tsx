import React from 'react'
import { Switch , Route} from 'react-router-dom'
import Home from './Home/Home'
import NotFound from './NotFound/NotFound'
import ProductDetail from './ProductDetail/ProductDetail'

const MainPages:React.FC = () => {
    return (
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/product/:slug" component={ProductDetail}/>
            <Route component={NotFound}/>
        </Switch>
    )
}

export default MainPages
