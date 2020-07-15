import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Product from './Components/Product';
import ProductItems from './Components/ProductItems';
import Header from './Components/Header';
import Footer from './Components/Footer'
import FormalShoes from './Components/FormalItems';
import Formal from './Components/Formal';

function RouteConfig() {
    return (
        <>
            <Router>
                <Header />
                
                    <Route path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/product" component={Product} />
                    <Route path="/product/:id" component={ProductItems} />
                    <Route path="/formal" component={Formal} />
                    <Route path="/formal/:id" component={FormalShoes} />
                    <Route path="*" component={() => <h2>Not Found</h2>} />
                
                <Footer />
            </Router>

        </>
    )

}
export default RouteConfig;
