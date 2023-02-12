import { useRouter } from 'next/router'

type ButtonType = 'primary' | 'secondary' | 'fab' | 'link';

interface ButtonProps {
    children: any
    type?: ButtonType
    onSubmit?: () => void
}

function classButton(typeButton: ButtonType): string {
    switch (typeButton) {
        case 'primary':
            return (`
                text-base h-12 w- px-6 py-2 rounded-md
                bg-gradient-to-tl from-sky-300 to-sky-500 
                hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-600 
                text-white text-center 
            `);
        case 'secondary':
            return (`
                text-base h-12 px-6 py-2 rounded-md
                border-2 border-sky-400
                hover:bg-gray-300 
                text-gray-800 text-center 
            `);
        case 'fab':
            return (`
                h-9 w-9 rounded-full
                bg-gradient-to-tl from-sky-300 to-sky-500 
                hover:bg-gradient-to-r hover:from-sky-600 hover:to-sky-600 
                text-white text-center
            `);
        case 'link':
            return '';
    }
}

export default function Button(props: ButtonProps) {
    const router = useRouter();

    return (
        <button
            className={`
                ${classButton(props.type ?? 'primary')}
                flex justify-center items-center mx-2`
            }
            onClick={props.onSubmit}
        >
            {props.children}
        </button >
    );
}

