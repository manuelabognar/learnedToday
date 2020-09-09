import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from './pages/Home';
import Cart from './pages/Cart';

function Routes() {
    return (
        <BrowserRouter>
            <Route path="/" exact component={ Home } />
            <Route path="/cart" component={ Cart } />
       </BrowserRouter>
    )
}

export default Routes;