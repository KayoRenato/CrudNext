import useCustomer from "../backend/db/hook/useCustomer"
import Customer from "../core/Customer"
import Button from "./Button"
import { AddCustomerIcon } from "./Icons"

interface TitleProps {
    children?: any
    hasButtonCreate?: boolean
}

export default function Title(props: TitleProps) {
    const { newCustomer } = useCustomer()


    return (
        <div className={`flex flex-col justify-center`}>
            <div className={`flex flex-row justify-between items-center`}>
                <h1 className="p-4 font-semibold text-lg">{props.children}</h1>
                {props.hasButtonCreate ? (
                    <Button type="fab" onSubmit={newCustomer}>
                        {AddCustomerIcon}
                    </Button>
                ) : false}

            </div>
            <hr className="border-t-2 border-sky-100" />
        </div>
    )
}