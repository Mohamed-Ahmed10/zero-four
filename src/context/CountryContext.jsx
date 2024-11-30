import { createContext, useState } from "react";

export const CountryContext = createContext();

export default function CountryProvider({ children }) {
    const [country, setCountry] = useState({});

    return (
        <CountryContext.Provider value={{ country, setCountry }}>
            {children}
        </CountryContext.Provider>
    );
}
