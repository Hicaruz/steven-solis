import React, { useEffect, useRef } from "react"

import { Route, Routes, useLocation  } from "react-router-dom";
import Dashboard from "../../pages/dashboard/Dashboard";
import Products from "../../pages/products/Products";
import Product from "../../pages/products/Product";
import Collections from "../../pages/collections/Collection";
import Auth from "../../pages/auth/Auth"
import Navigation from "../navigation";
import Cart from "../../pages/cart/cart"


function Header() {

    const videoEl = useRef(null);
    const attemptPlay = () => {
        videoEl &&
            videoEl.current &&
            videoEl.current.play().catch(error => {
                console.error("Error attempting to play", error);
            });
    };

    useEffect(() => {
        attemptPlay();
    }, []);

    const location = useLocation();

    return (

        <div>
            {location.pathname === "/" && <div className="">
                <video
                    id="myVideo"
                    playsInline
                    loop
                    muted
                    alt="All the devices"
                    src={"https://firebasestorage.googleapis.com/v0/b/dev-stevensolis.appspot.com/o/VIDEO.MP4?alt=media&token=c3372d07-5fbb-4bc3-8356-9e8c6d3f1639"}
                    ref={videoEl}
                />
            </div>}
            <div>
                <Navigation />
            </div>
            <br/>
            <br/>
            <br/>

            <div className="px-6 ">
                <Routes>
                    <Route path="/" element={<Dashboard />} />
                    <Route exact path="/product/:id" element={<Product />} />
                    <Route exact path="/shop" element={<Products />} />
                    <Route exact path="/dashboard" element={<Dashboard />} />
                    <Route exact path="/collections" element={<Collections />} />
                    <Route exact path="/auth" element={<Auth />} />
                    <Route exact path="/bag" element={<Cart />} />

                </Routes>
            </div>
            <div id="footer">
                <div className="bg-white flex md:items-center justify-between px-6 border-t-2 border-gray-400 py-4">
                    <span className="text-sm text-gray-500 sm:text-center">© 2022 STEVENSOLIS</span>
                    <ul className="flex flex-wrap gap-3 items-center text-sm text-gray-500 sm:mt-0">
                        <li>
                            <i className="fa-brands fa-facebook-square fa-xl"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-twitter-square fa-xl"></i>
                        </li>
                        <li>
                            <i className="fa-brands fa-instagram fa-xl"></i>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );

}

export default Header