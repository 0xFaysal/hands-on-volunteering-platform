import React, {createContext} from "react";

export const AuthContext = createContext(null);

function AuthProvider({children}) {
    const data = {
        user: "Faysal Ahmed",
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
}

export default AuthProvider;
