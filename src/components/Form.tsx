import { useState } from "react";
import Customer from "../core/Customer";
import Button from "./Button";
import Input from "./Input";

interface FormProps {
    customer: Customer
}


export default function Form(props: FormProps) {
    const id = props.customer?.id
    const [name, setName] = useState(props.customer.name )
    const [age, setAge] = useState(props.customer.age)

    return (
        <div className="flex flex-row justify-between ">
            <Input
                text="Name"
                type="text"
                value={name}
                className={'w-80'}
                onChange={setName}
            />
            <Input
                text="Age"
                type="number"
                value={age}
                className={'w-20'}
                onChange={setAge} />
            <div className="flex flex-row items-end">
                <Button type="primary">{id ? 'Update' : 'Create'}</Button>
                <Button type="secondary">Cancel</Button>
            </div>
        </div>
    )
}