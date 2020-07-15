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
                
                    <Route exact path="/" component={Home} />
                    <Route exact path="/about" component={About} />
                    <Route exact path="/product" component={Product} />
                    <Route exact path="/product/:id" component={ProductItems} />
                    <Route exact path="/formal" component={Formal} />
                    <Route exact path="/formal/:id" component={FormalShoes} />
                    <Route path="*" component={() => <h2>Not Found</h2>} />
                
                <Footer />
            </Router>

        </>
    )

}
export default RouteConfig;
