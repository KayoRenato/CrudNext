import Title from "./Title";

interface LayoutProps {
    title: string
    children: any
}

export default function Layout(props: LayoutProps) {
    return (
        <div className={`
            flex flex-col w-2/3 
            bg-white text-gray-800
            shadow-xl rounded-md

        `}>
            <Title>
                {props.title}
            </Title>
            <div className={`mx-4 my-2 flex flex-col`}>
                {props.children}
            </div>
        </div >
    );
} 