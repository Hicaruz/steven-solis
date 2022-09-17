import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from '../../tools/firebase'
import { signOut } from "firebase/auth";



const Navigation = () => {
    const navigate = useNavigate();
    const [hide, setHide] = useState(false)



    const user = auth.currentUser ?? {}

    const logout = () => {

        signOut(auth).then(() => {
            navigate("/")

        })

    }

    return (
        <>



            <div className="hidden md:flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-semibold">

                <div className="grid justify-items-start w-full text-gray-500">
                    <div className="menu cursor-pointer">
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop")}>SHOP</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop?gender=f")}>SHOP WOMEN</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop?gender=m")}>SHOP MEN</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/collections")}>COLLECTIONS</div>
                    </div>
                </div>
                <div className="grid justify-items-center w-full">
                    <div className="cursor-pointer" onClick={() => navigate("/")}>

                        <img src="/images/logo.jpg" alt="logo steven solis" />
                    </div>
                </div>
                <div className="grid justify-items-end w-full text-gray-500">
                    <div className="menu cursor-pointer text-right">
                        <i className="fa-solid fa-magnifying-glass fa-lg py-2"></i>




                        <div className="hover:text-gray-800 ">BAG 0</div>
                        {user.uid ?
                            <div className="text-black" onClick={logout}>{user.displayName}</div> :

                            <div className="hover:text-gray-800" onClick={() => navigate("/auth")}>LOG IN / REGISTER</div>}
                        {/* <div className="hover:text-gray-800">CONTACT</div> */}
                    </div>
                </div>

            </div>
            <div className="md:hidden flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-semibold">

                <div className="w-full text-gray-500 inline-block align-baseline" onClick={() => setHide(!hide)}>
                    <div className="menu cursor-pointer text-left">
                        <i className="fa-solid fa-bars fa-2xl"></i>

                    </div>
                </div>
                <div className="grid justify-items-center w-full">
                    <img src="/images/logo.jpg" alt="logo steven solis" />

                </div>
                <div className=" w-full text-gray-500 inline-block align-baseline">
                    <div className="menu cursor-pointer text-right">
                        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>

                    </div>
                </div>

            </div>
            <div className={hide ? "" : "hidden mobile-menu"}>
                <ul className="pt-2 font-semibold">
                    <li className="active">
                        <div className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-700 " onClick={() => { navigate("/campaign"); setHide(!hide) }}>CAMPAIGN</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white transition duration-300">SHOP WOMEN</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white transition duration-300">SHOP MEN</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white transition duration-300">COLLECTIONS</div>
                    </li>
                </ul>
            </div>

        </>
    )

}


export default Navigation