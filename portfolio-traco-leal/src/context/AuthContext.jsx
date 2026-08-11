import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext({});

export function AuthProvider({ children }) {

    const [usuario, setUsuario] = useState(() => {

        const salvo = localStorage.getItem("usuario");

        return salvo ? JSON.parse(salvo) : null;

    });

    const [token, setToken] = useState(() => {

        return localStorage.getItem("token");

    });

    useEffect(() => {

        if (usuario) {

            localStorage.setItem(

                "usuario",

                JSON.stringify(usuario)

            );

        }

        else {

            localStorage.removeItem("usuario");

        }

    }, [usuario]);

    useEffect(() => {

        if (token) {

            localStorage.setItem(

                "token",

                token

            );

        }

        else {

            localStorage.removeItem("token");

        }

    }, [token]);

    function logout() {

        setUsuario(null);

        setToken(null);

    }

    return (

        <AuthContext.Provider

            value={{

                usuario,

                token,

                setUsuario,

                setToken,

                logout

            }}

        >

            {children}

        </AuthContext.Provider>

    );

}

export function useAuth() {

    return useContext(AuthContext);

}