import { createContext, useState } from "react"

export const UserDataContext = createContext()


export default function UserDataProvider({ children }) {
    const [formState, setFormState] = useState({});

    return (
        <UserDataContext.Provider value={{ formState, setFormState }}>{children}</UserDataContext.Provider>
    )
}
