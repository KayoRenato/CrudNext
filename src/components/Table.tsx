import Customer from "../core/Customer"
import { EditorIcon, TrashIcon } from "./Icons"


interface TableProps {
    customers: Customer[]
}

export default function Table(props: TableProps) {
    const renderTableContent = () => {
        return (
            props.customers.map(client => (
                <tr className={
                    `h-11 hover:bg-slate-300 ${+client.id % 2 == 0 ? 'bg-slate-100' : 'bg-slate-200'}`}
                    key={client.id}>
                    <td className="text-center">{client.id}</td>
                    <td className="pl-6">{client.name}</td>
                    <td className="text-center">{client.age}</td>
                    <td className="text-center flex h-11 justify-evenly align-baseline">
                        <button
                            className=" h-10 w-10hover:text-sky-600"
                            onClick={() => { console.log(`Edit ${client.name}`) }}
                        >
                            {EditorIcon}
                        </button>
                        <button
                            className="h-10 w-10 hover:text-red-500"
                            onClick={() => { console.log(`Erase ${client.name}`) }}
                        >
                            {TrashIcon}
                        </button>

                    </td>
                </tr>
            ))
        )
    }

    const renderEmptyTableContent = () => {
        return (
            <tr className=" text-gray-400 text-center items-center h-80">
                <td colSpan={3}>
                    <span className="text-center text-gray-400">No customers found</span>
                </td>
            </tr>
        )
    }



    return (

        <table className="w-full rounded-md overflow-hidden">
            <thead className="bg-gray-400 text-gray-800 h-11">
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>Age</th>
                    <th className="w-20" />
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