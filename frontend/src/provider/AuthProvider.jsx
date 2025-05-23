import {createContext, useEffect, useState} from "react";
import axios from "axios";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const serverURL = "http://localhost:5000/";

    const axiosInstance = axios.create({
        baseURL: "http://localhost:5000/api",
        withCredentials: true,
        headers: {
            "Content-Type": "application/json",
        },
    });

    // Add interceptor to handle 401 errors silently
    // axiosInstance.interceptors.response.use(
    //     (response) => response,
    //     (error) => {
    //         console.error("Error in axios interceptor:", error);
    //         if (error?.status === 401) {
    //             return Promise.resolve({data: {user: null}});
    //         }
    //         return Promise.reject(error);
    //     }
    // );

    useEffect(() => {
        const checkAuth = async () => {
            try {
                const res = await axiosInstance.get("/auth/check");
                if (res.data.user) {
                    setUser(res.data.user);
                    // console.log("User authenticated:", res.data.user);
                    // console.log("User data:", user);
                }
            } catch (error) {
                console.error(
                    "Auth check failed:",
                    error.response?.data?.message
                );
            } finally {
                setLoading(false);
            }
        };

        checkAuth();
    }, []);

    const register = async (name, email, password) => {
        try {
            const res = await axiosInstance.post("/auth/register", {
                name,
                email,
                password,
            });
            if (res.data.user) {
                setUser(res.data.user);
                return {success: true};
            }
            return {
                success: false,
                error: "Registration failed",
            };
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || "Registration failed",
            };
        }
    };

    // Login function
    const login = async (email, password) => {
        try {
            const res = await axiosInstance.post("/auth/login", {
                email,
                password,
            });
            setUser(res.data.user);
            console.log(res);
            return {success: true};
        } catch (error) {
            return {
                success: false,
                error: error.response?.data?.error || "Login failed",
            };
        }
    };

    const data = {
        user,
        axiosInstance,
        login,
        register,
        serverURL,
    };

    if (loading) {
        return <div>Loading...</div>; // Or your loading component
    }

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
