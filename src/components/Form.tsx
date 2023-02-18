// import { useRouter } from "next/router";
import { useState } from "react";
import useCustomer from "../backend/db/hooks/useCustomer";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer?: Customer;
}

export default function Form(props: FormProps) {
    const id = props.customer?.id
    const [name, setName] = useState(props.customer?.name)
    const [age, setAge] = useState(props.customer?.age)

    const { savedCustomer, abortChange } = useCustomer()

    const newClient = new Customer(name, age, id)

    return (
        <div className="
            grid grid-rows-3 lg:flex lg:flex-row lg:justify-between
        ">
            <Input
                text="Name"
                type="text"
                value={name}
                className={'lg:w-80'}
                onChange={setName}
            />
            <Input
                text="Age"
                type="number"
                value={age}
                className={'lg:w-20'}
                onChange={setAge} />
            <div className="flex flex-row items-end justify-end">
                <Button type="primary" onSubmit={() => {
                    if (age) (!!name && !!+age) ? savedCustomer(newClient) : false
                }}>
                    {!!id ? 'Update' : 'Create'}
                </Button>
                <Button type="secondary" onSubmit={() => abortChange()}>Cancel</Button>
            </div>
        </div>
    )
}