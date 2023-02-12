import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import Customer from "../../../core/Customer"
import CustomerRepository from "../../../core/CustomerRepository"
import CustomerCollection from "../CustomerCollection"

export default function useCustomer() {
    const router = useRouter()

    const repo: CustomerRepository = new CustomerCollection()

    const [customer, setCustomer] = useState<Customer>(Customer.empty())
    const [customersList, setCustomers] = useState<Customer[]>([])

    useEffect(() => {
        repo.getAll().then(customersList => setCustomers(customersList))
    }, [])


    function selectedCustomer(customer: Customer) {
        setCustomer(customer)
        router.push('/customer')
    }
    
    async function newCustomer() {
        setCustomer(Customer.empty())
        router.push('/customer')
    }
    // await repo.create(customer)
    
    async function savedCustomer(customer: Customer) {
        setCustomer(customer)
        await repo.update(customer)
    }
    
    async function deletedCustomer(customer: Customer) {
        setCustomer(customer)
        await repo.delete(customer)
        getAllCustomers()
    }

    function getAllCustomers() {
        repo.getAll().then(customersList => {
            setCustomers(customersList)
        })
        return customersList
    }


    return {
        customer,
        customersList,
        selectedCustomer,
        deletedCustomer,
        newCustomer,
        savedCustomer,
        getAllCustomers
    }
}