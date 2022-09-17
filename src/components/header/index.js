import React from "react"

import { Route, Routes } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Products from "../../pages/products/Products";
import Product from "../../pages/products/Product";
import Collections from "../../pages/collections/Collection";
import Auth from "../../pages/auth/Auth"
import Navigation from "../navigation";
class Header extends React.Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation />
                </div>

                <div className="px-6 py-5">
                    <Routes>
                        <Route path="/" element={<Dashboard />} />
                        <Route exact path="/product/:id" element={<Product />} />
                        <Route exact path="/shop" element={<Products />} />
                        <Route exact path="/dashboard" element={<Dashboard />} />
                        <Route exact path="/collections" element={<Collections />} />
                        <Route exact path="/auth" element={<Auth />} />

                    </Routes>
                </div>
                <div id="footer">
                    <div className="bg-white flex md:items-center justify-between p-6 border-t-2 border-gray-400">
                        <span className="text-sm text-gray-500 sm:text-center">© 2022 STEVENSOLIS</span>
                        <ul className="flex flex-wrap gap-3 items-center  text-sm text-gray-500 sm:mt-0">
                            <li>
                                <i className="fa-brands fa-facebook-square fa-lg"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-twitter-square fa-lg"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-instagram fa-lg"></i>
                            </li>
                            <li>
                                <i className="fa-brands fa-youtube fa-lg"></i>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}

export default Header