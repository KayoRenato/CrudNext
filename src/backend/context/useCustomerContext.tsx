import { createContext, useState } from "react";
import Customer from "../../core/Customer";

interface CustomerContextProps {
    customerSelected: Customer;
    changeCustomer: (customer: Customer) => void;
}

const useCustomerContext = createContext<CustomerContextProps>({})

export function CustomerProvider(props: any) {
    const [customerSelected, setCustomerSelected] = useState<Customer>(Customer.empty())

    function changeCustomer(customer: Customer) {
        setCustomerSelected(customer)
    }

    return (
        <useCustomerContext.Provider value={{
            customerSelected,
            changeCustomer
        }}>
            {props.children}
        </useCustomerContext.Provider>
    )
}

export default useCustomerContext

