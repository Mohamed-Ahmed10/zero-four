import { createContext, useState } from "react"
import { formInitialValue } from "../data/data";

export const UserDataContext = createContext()


export default function UserDataProvider({ children }) {
    const [formState, setFormState] = useState(formInitialValue);

    const resetFormState = () => {
        setFormState(formInitialValue);
    };

    return (
        <UserDataContext.Provider value={{ formState, setFormState, resetFormState }}>{children}</UserDataContext.Provider>
    )
}
