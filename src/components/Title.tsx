interface TitleProps {
    children?: any
}

export default function Title(props: TitleProps) {
    return (
        <div className={`flex flex-col justify-center`}>
            <h1 className="px-4 py-2 font-semibold text-lg">{props.children}</h1>
            <hr className="border-t-2 border-sky-100"/>
        </div>
    )
}