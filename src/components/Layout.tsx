import Title from "./Title";

interface LayoutProps {
    title: string
    children: any
    hasButtonCreate?: boolean
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3 max-w-screen-md
            bg-white text-gray-800
            shadow-xl rounded-md

        `}>
            <Title hasButtonCreate={props.hasButtonCreate}>
                {props.title}
            </Title>
            <div className={`m-4 flex flex-col`}>
                {props.children}
            </div>
        </div >
    );
} 