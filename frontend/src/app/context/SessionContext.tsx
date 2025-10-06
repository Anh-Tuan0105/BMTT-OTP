/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import { useContext, createContext, useState, useEffect } from "react";
import { json } from "stream/consumers";

const SessionContext = createContext<any>({});

export const useSession = () => useContext(SessionContext);

export default function SessionProvider({ children }: { children: any }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [user, setUser] = useState(null);

    useEffect(() => {
        const raw = sessionStorage.getItem("user");
        if (!raw) {
            setIsLoggedIn(false);
            setUser(null);
            return;
        }
        try {
            const parsed = JSON.parse(raw);
            if (parsed && typeof parsed === "object" && Object.keys(parsed).length > 0) {
                setUser(parsed);
                setIsLoggedIn(true);
            } else {
                setIsLoggedIn(false);
                setUser(null);
            }
        } catch {
            setIsLoggedIn(false);
            setUser(null);
        }
    }, [])

    const login = (userData: any) => {
        setIsLoggedIn(true);
        setUser(userData);
        sessionStorage.setItem("user", JSON.stringify(userData));
    };

    const logout = (data: any) => {
        if (data) {
            setIsLoggedIn(false);
            setUser(null);
            sessionStorage.removeItem("user");
        }
    };

    return (
        <SessionContext.Provider value={{ isLoggedIn, user, login, logout }}>
            {children}
        </SessionContext.Provider>
    )
};