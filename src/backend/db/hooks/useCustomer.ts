import { useEffect, useState } from "react"
import CustomerCollection from "../CustomerCollection"
import Customer from "../../../core/Customer"
import CustomerRepository from "../../../core/CustomerRepository"
import { useRouter } from "next/router"
import useCustomerData from "./useCustomerData"

export default function useCustomer() {
    const router = useRouter()
    const repo: CustomerRepository = new CustomerCollection()

    const { customerSelected, changeCustomer } = useCustomerData()

    // const [customerState, setCustomer] = useState<Customer>()
    const [customersList, setCustomers] = useState<Customer[]>([])

    useEffect(getAllCustomers, [])

    function getAllCustomers() {
        repo.getAll().then(customersList => {
            setCustomers(customersList)
        })
    }

    function newCustomer() {
        changeCustomer(Customer.empty())
        router.push('/customer')
    }


    async function deletedCustomer(customer: Customer) {
        await repo.delete(customer)
        getAllCustomers()
    }

    function selectedCustomer(customerSelected: Customer) {
        console.log('useCustomer - Customer Return: ', customerSelected)

        changeCustomer(customerSelected) //Not set State
        console.log('customerState - useState Return: ', customerSelected)
        router.push('/customer')
    }

    async function savedCustomer(customerSelected: Customer) {
        if (!!customerSelected.id) {
            await repo.update(customerSelected)
        } else {
            await repo.create(customerSelected)
        }
        getAllCustomers()
        router.push('/')

    }

    function abortChange() {
        router.push('/')
    }


    return {
        customersList,
        selectedCustomer,
        deletedCustomer,
        newCustomer,
        savedCustomer,
        abortChange,
        getAllCustomers
    }
}