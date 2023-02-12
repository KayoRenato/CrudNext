import { useEffect, useState } from "react"
import CustomerCollection from "../CustomerCollection"
import Customer from "../../../core/Customer"
import CustomerRepository from "../../../core/CustomerRepository"
import { useRouter } from "next/router"

export default function useCustomer() {
    const router = useRouter()
    const repo: CustomerRepository = new CustomerCollection()

    const [customerState, setCustomer] = useState<Customer>()
    const [customersList, setCustomers] = useState<Customer[]>([])

    useEffect(getAllCustomers, [])

    function getAllCustomers() {
        repo.getAll().then(customersList => {
            setCustomers(customersList)
        })
    }

    function newCustomer() {
        setCustomer(Customer.empty())
        router.push('/customer')
    }


    async function deletedCustomer(customer: Customer) {
        await repo.delete(customer)
        getAllCustomers()
    }

    function selectedCustomer(customerSelected: Customer) {
        console.log('useCustomer - Customer Return: ', customerSelected)
        // setCustomer(new Customer('Vini', 23, 'kjldkjask')) //Not set State
        setCustomer(customerSelected) //Not set State
        console.log('customerState - useState Return: ', customerState)
        router.push({
            pathname: '/customer',
            // query: { 
            //     id: customerSelected.id,
            //     name: customerSelected.name,
            //     age: customerSelected.age
            //  }
        })
    }

    async function savedCustomer(customer: Customer) {
        if (!!customer.id) {
            await repo.update(customer)
        } else {
            await repo.create(customer)
        }
        getAllCustomers()
        router.push('/')

    }

    function abortChange() {
        router.push('/')
    }


    return {
        customerState,
        customersList,
        selectedCustomer,
        deletedCustomer,
        newCustomer,
        savedCustomer,
        abortChange,
        getAllCustomers
    }
}