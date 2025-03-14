import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import App from "./App";
import Home from "./layout/Home";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route index element={<Home />} />
                    </Route>
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
