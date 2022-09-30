import React, { useState } from "react"
import { useNavigate } from "react-router-dom";
import { auth } from '../../tools/firebase'
import { signOut } from "firebase/auth";

import  {connect} from  'react-redux'


const Navigation = (props) => {
    const navigate = useNavigate();
    const [hide, setHide] = useState(false)



    const user = auth.currentUser ?? {}

    const logout = () => {

        signOut(auth).then(() => {
            navigate("/")

        })

    }

    return (
        <div className="content">



            <div className="hidden md:flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-semibold">

                <div className="grid justify-items-start w-full text-black">
                    <div className="menu cursor-pointer">
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop")}>SHOP</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop?gender=f")}>SHOP WOMEN</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/shop?gender=m")}>SHOP MEN</div>
                        <div className="hover:text-gray-800" onClick={() => navigate("/collections")}>COLLECTIONS</div>
                    </div>
                </div>
                <div className="grid justify-items-center w-full">
                    <div className="cursor-pointer" onClick={() => navigate("/")}>

                        <img src="/images/logo.png" alt="logo steven solis" />
                    </div>
                </div>
                <div className="grid justify-items-end w-full text-black">
                    <div className="menu cursor-pointer text-right">
                        <i className="fa-solid fa-magnifying-glass fa-lg py-2"></i>




                        <div className="hover:text-gray-800" onClick={() => navigate('/bag')}>BAG {props.numberCart}</div>
                        {user.uid ?
                            <div className="text-black" onClick={logout}>{user.displayName}</div> :

                            <div className="hover:text-gray-800" onClick={() => navigate("/auth")}>LOG IN / REGISTER</div>}
                        {/* <div className="hover:text-gray-800">CONTACT</div> */}
                    </div>
                </div>

            </div>
            <div className="md:hidden flex justify-between px-6 pt-6 w-full uppercase text-xs tracking-widest font-semibold">

                <div className="w-full text-black inline-block align-baseline" onClick={() => setHide(!hide)}>
                    <div className="menu cursor-pointer text-left">
                        <i className="fa-solid fa-bars fa-2xl"></i>

                    </div>
                </div>
                <div className="inline-block  align-top"  onClick={() => navigate("/")}>
                    <img src="/images/logo.png" alt="logo steven solis" width="900" className="logo"/>

                </div>
                <div className=" w-full text-black inline-block align-baseline">
                    <div className="menu cursor-pointer text-right">
                        <i className="fa-solid fa-magnifying-glass fa-2xl"></i>

                    </div>
                </div>

            </div>
            <div className={hide ? "" : "hidden mobile-menu"}>
                <ul className="pt-2 font-semibold bg-white text-black shadow">
                    <li className="active ">
                        <div className="block text-sm px-2 py-4 hover:text-white hover:bg-gray-700 " onClick={() => { navigate("/shop"); setHide(!hide) }}>SHOP</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white" onClick={() => { navigate("/shop?gender=f"); setHide(!hide) }}>SHOP WOMEN</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white" onClick={() => { navigate("/shop?gender=m"); setHide(!hide) }}>SHOP MEN</div>
                    </li>
                    <li>
                        <div className="block text-sm px-2 py-4 hover:bg-gray-700 hover:text-white" onClick={() => { navigate("/collections"); setHide(!hide) }}>COLLECTIONS</div>
                    </li>
                </ul>
            </div>

        </div>
    )

}

const mapStateToProps = state =>{
    return{
        numberCart:state._todoProduct.numberCart
    }
}
export default connect(mapStateToProps,null)(Navigation)

