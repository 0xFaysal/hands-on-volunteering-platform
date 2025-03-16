import React from "react";
import {BrowserRouter, Routes, Route} from "react-router";
import App from "./App";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";
import Posts from "./layout/Posts";
import Events from "./layout/Events";
import Leaderboard from "./layout/Leaderboard";
import AddSkill from "./layout/AddSkill";

function Router() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route element={<AddSkill />}>
                        <Route index element={<Home />} />
                        <Route path='/events' element={<Events />} />
                        <Route path='/posts' element={<Posts />} />
                        <Route path='/leaderboard' element={<Leaderboard />} />
                    </Route>
                    <Route path='/login' element={<Login />} />
                    <Route path='/register' element={<Register />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default Router;
