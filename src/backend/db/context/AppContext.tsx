import { createContext, useEffect, useState } from "react";
import CustomerRepository from "../../../core/CustomerRepository";
import CustomerCollection from "../CustomerCollection";

interface AppContextProps {
    repo: CustomerRepository
}

const AppContext = createContext<AppContextProps>({

})

export function AppProvider(props: any) {
    const repository: CustomerRepository = new CustomerCollection()
    const [repo, setRepo] = useState(repository)

    return (
        <AppContext.Provider value={{repo}}>
            {props.children}
        </AppContext.Provider>
    )
}

export default AppContext

