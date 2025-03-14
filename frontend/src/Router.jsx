import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import App from "./App";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<App />}>
                        <Route index element={<Home />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
