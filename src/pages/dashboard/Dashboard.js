import React from "react"
import { useNavigate } from "react-router-dom";


const Dashboard = () => {
    const navigate = useNavigate();


    return (
        <>
            <div type="button" className="shopnow bg-black mt-2 py-2 px-6 font-semibold text-white w-full">
                <button onClick={() => navigate("/shop")}>

                    SHOP NOW
                </button>

            </div>

        </>
    )
}

export default Dashboard