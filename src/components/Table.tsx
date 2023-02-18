import Customer from "../core/Customer"
import { EditorIcon, TrashIcon } from "./Icons"

interface TableProps {
    customers: Customer[]
    selectedCustomer: (customer: Customer) => void
    deletedCustomer: (customer: Customer) => void
}

export default function Table(props: TableProps) {

    function renderActions(client: Customer) {
        return (
            <td className="p-2">
                {props.selectedCustomer ? (
                    <button
                        onClick={() => { props.selectedCustomer(client) }}
                        className="flex align-middle justify-center h-10 w-10 hover:text-sky-600"
                    >
                        {EditorIcon}
                    </button>
                ) : false}

                {props.deletedCustomer ? (
                    <button
                        onClick={() => { props.deletedCustomer(client) }}
                        className="flex align-middle justify-center h-10 w-10 hover:text-red-500"
                    >
                        {TrashIcon}
                    </button>) :
                    false
                }

            </td>
        )

    }

    const renderTableContent = () => {
        return (
            props.customers.map(client => (
                <tr className={
                    `h-11 hover:bg-slate-300
                     ${+client.id % 2 == 0 ? 'bg-slate-100' : 'bg-slate-200'}
                      text-xs md:text-base`}
                    key={client.id}>
                    <td className="text-center w-16 p-2 break-all md:break-keep ">{client.id}</td>
                    <td className="pl-6">{client.name}</td>
                    <td className="text-center">{client.age}</td>
                    {renderActions(client)}
                </tr>
            ))
        )
    }

    const renderEmptyTableContent = () => {
        return (
            <tr className=" text-gray-400 text-center items-center h-80 text-xs md:text-base">
                <td colSpan={3}>
                    <span className="text-center text-gray-400">No customers found</span>
                </td>
            </tr>
        )
    }


    return (

        <table className="w-full rounded-md overflow-hidden">
            <thead className="bg-gray-400  text-gray-800 h-11 text-xs md:text-base">
                <tr>
                    <th className="px-2">ID</th>
                    <th className="px-2">Name</th>
                    <th className="px-2">Age</th>
                    <th className="w-8" />
                </tr>
            </thead>
            <tbody className="">
                {props.customers.length > 0 ?
                    renderTableContent() :
                    renderEmptyTableContent()}
            </tbody>
        </table >


    )

}