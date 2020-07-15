import React from 'react';
import { Routes, Route } from "react-router-dom";
import Home from './Components/Home';
import About from './Components/About';
import Header from './Components/Header';
import Footer from './Components/Footer'
import FormalShoes from './Components/FormalItems';
import Formal from './Components/Formal';
import Moccasins from './Components/Moccasins';
import MoccasinsShoes from './Components/MoccasinsItems';


function RouteConfig() {
    return (
        <>
            <Header />
            <Routes>


                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />

                <Route path="/formal" element={<Formal />} />
                <Route path="/formal/:id" element={<FormalShoes />} />

                <Route path="/moccasins" element={<Moccasins />} />
                <Route path="/moccasins/:id" element={<MoccasinsShoes />} />

                <Route path="*" element={() => <h2>Not Found</h2>} />

            </Routes>
            <Footer />

        </>
    )

}
export default RouteConfig;
