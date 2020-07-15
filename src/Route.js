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
                
                    <Route path="/" element={Home} />
                    <Route path="/about" element={About} />
                    <Route path="/product" element={Product} />
                    <Route path="/product/:id" element={ProductItems} />
                    <Route path="/formal" element={Formal} />
                    <Route path="/formal/:id" element={FormalShoes} />
                    <Route path="*" element={() => <h2>Not Found</h2>} />
                
                <Footer />
            </Router>

        </>
    )

}
export default RouteConfig;
