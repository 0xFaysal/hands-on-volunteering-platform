import {StrictMode} from "react";
import {createRoot} from "react-dom/client";
import "./index.css";
import Router from "./Router";
import AuthProvider from "./provider/AuthProvider";
import {ToastContainer} from "react-toastify";

createRoot(document.getElementById("root")).render(
    <StrictMode>
        <AuthProvider>
            <Router />
            <ToastContainer />
        </AuthProvider>
    </StrictMode>
);
