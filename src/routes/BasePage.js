import React, { Suspense } from "react";
import { Routes } from "react-router-dom";
import { ContentRoute } from "../components/layout";

import Dashboard from "../pages/dashboard/Dashboard";

export default function BasePage() {

    return (
        <Suspense >
            <Routes>
                <ContentRoute path="/" element={<Dashboard />} />
                <ContentRoute exact path="/dashboard" element={<Dashboard />} />
            </Routes>
        </Suspense>
    );
}


