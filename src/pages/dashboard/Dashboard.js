import React, { useEffect, useRef } from "react"

import DashboardImage from "../../components/dashboardImage"

const Dashboard = () => {
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

    return (
        <>
            <div className="hidden md:block ">
                <video
                    style={{ maxWidth: "65%",  margin: "0 auto" }}
                    playsInline
                    loop
                    muted
                    controls
                    alt="All the devices"
                    src="/videos/dashboard.mp4"
                    ref={videoEl}
                />
            </div>
            <div
                id="dashboardCarousel"
                className="md:hidden block carousel-dark slide carousel-fade relative"
                data-bs-ride="carousel"
            >
                <div className="carousel-indicators absolute right-0 bottom-0 left-0 flex justify-center p-0 mb-4">
                    <button
                        type="button"
                        data-bs-target="#dashboardCarousel"
                        data-bs-slide-to="0"
                        className="active"
                        aria-current="true"
                        aria-label="slide 1"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#dashboardCarousel"
                        data-bs-slide-to="1"
                        aria-label="slide 2"
                    ></button>
                    <button
                        type="button"
                        data-bs-target="#dashboardCarousel"
                        data-bs-slide-to="2"
                        aria-label="slide 3"
                    ></button>
                </div>
                <div className="carousel-inner relative w-full overflow-hidden">
                    <div className="carousel-item active float-left w-full">
                        <DashboardImage image="/images/collection/A.jpg" />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <DashboardImage image="/images/collection/B.jpg" reverse />
                    </div>
                    <div className="carousel-item float-left w-full">
                        <DashboardImage image="/images/collection/C.jpg" />
                    </div>
                </div>

            </div>
            <h3 className="md:hidden block text-center pt-6">
                <span className="font-extrabold	">#LYCASTESKINNERI</span> COLLECTION
            </h3>
        </>
    )
}

export default Dashboard