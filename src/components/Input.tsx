interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    readonly?: boolean
    className?: string
    onChange?: (event: any) => void
}

export default function Input(props: InputProps) {
    return (
        <div className="flex flex-col">
            <label className="py-2 px-4 font-medium">
                {props.text}
            </label>
            <input
                type={props.type ?? 'text'}
                value={props.value} min={0} max={100}
                readOnly={props.readonly}
                onChange={e => props.onChange?.(e.target.value)}
                className={`mx-2 px-4 h-12 ${props.className ?? ''}
                 bg-gray-200 focus:outline-none border-2
                  focus:border-sky-400 rounded-lg`}
            />

        </div>
    )
}