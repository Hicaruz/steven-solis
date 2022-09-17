import React from 'react'


const DashboardImage = ({ image }) => {

    return (
        <div className={`justify-center flex md:flex-row flex-col`}>
            <img className="" src={image} width="700" alt="mobile"/>
            <img className="hidden md:flex md:w-[30rem]" src="/images/LYCASTE.jpg" alt="main" />
            <img className="md:hidden flex" src="/images/LYCASTE-sm.jpg"  alt="min"/>
        </div>
    )
}


export default DashboardImage