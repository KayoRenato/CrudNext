import { AddCustomerIcon } from "./Icons"

interface TitleProps {
    children?: any
}

export default function Title(props: TitleProps) {
    return (
        <div className={`flex flex-col justify-center`}>
            <div className={`flex flex-row justify-between items-center`}>
                <h1 className="p-4 font-semibold text-lg">{props.children}</h1>
                <button
                    className="
                    flex justify-center items-center mr-4
                    h-9 w-9 bg-sky-500 hover:bg-sky-600 rounded-full 
                     text-white text-center "
                    onClick={() => console.log('Create new customer')}
                >{AddCustomerIcon}</button>
            </div>
            <hr className="border-t-2 border-sky-100" />
        </div>
    )
}