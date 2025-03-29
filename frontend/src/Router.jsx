// import React from "react";
// import {BrowserRouter, Routes, Route, ScrollRestoration} from "react-router";
// import App from "./App";
// import Home from "./layout/Home";
// import Login from "./layout/Login";
// import Register from "./layout/Register";
// import Posts from "./layout/Posts";
// import Events from "./layout/Events";
// import Leaderboard from "./layout/Leaderboard";
// import AddSkill from "./layout/AddSkill";

// function Router() {
//     return (
//         <>
//             <BrowserRouter>
//                 <Routes>
//                     <Route element={<App />}>
//                         <Route index element={<Home />} />
//                         <Route path='/events' element={<Events />} />
//                         <Route path='/posts' element={<Posts />} />
//                         <Route path='/leaderboard' element={<Leaderboard />} />
//                     </Route>
//                     <Route path='/login' element={<Login />} />
//                     <Route path='/add-skill' element={<AddSkill />} />

//                     <Route path='/register' element={<Register />} />
//                 </Routes>
//             </BrowserRouter>
//         </>
//     );
// }

// export default Router;

import {
    createBrowserRouter,
    RouterProvider,
    Route,
    createRoutesFromElements,
} from "react-router";
import App from "./App";
import Home from "./layout/Home";
import Login from "./layout/Login";
import Register from "./layout/Register";
import Posts from "./layout/Posts";
import Events from "./layout/Events";
import Leaderboard from "./layout/Leaderboard";
import AddSkill from "./layout/AddSkill";
import Communities from "./layout/Communities";

const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route element={<App />}>
                <Route index element={<Home />} />
                <Route path='/events' element={<Events />} />
                <Route path='/request_aid' element={<Posts />} />
                <Route path='/leaderboard' element={<Leaderboard />} />
                <Route path='/communities' element={<Communities />} />
            </Route>
            <Route path='/login' element={<Login />} />
            <Route path='/add-skill' element={<AddSkill />} />
            <Route path='/register' element={<Register />} />
        </>
    )
);

function Router() {
    return <RouterProvider router={router} />;
}

export default Router;
