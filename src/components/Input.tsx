interface InputProps {
    text: string
    type?: 'text' | 'number'
    value: any
    className?: string
    onChange?: (value: any) => void
}

export default function Input(props: InputProps) {

    function renderNumericInput() {
        return (
            <input
                type={props.type}
                inputMode="numeric"
                pattern="\d*"
                value={props.value} min={0} max={100}
                onChange={e => props.onChange?.(e.target.value)}
                className={`mx-2 px-4 h-12 ${props.className ?? ''}
             bg-gray-200 focus:outline-none border-2
              focus:border-sky-400 rounded-lg`}
            />
        )
    }

    function renderTextInput() {
        return (
            <input
                type={props.type}
                value={props.value}
                onChange={e => props.onChange?.(e.target.value)}
                className={`mx-2 px-4 h-12 ${props.className ?? ''}
             bg-gray-200 focus:outline-none border-2
              focus:border-sky-400 rounded-lg`}
            />
        )
    }


    return (
        <div className="flex flex-col">
            <label className="py-2 px-4 font-medium">
                {props.text}
            </label>

            {props?.type === 'number' ? renderNumericInput() : renderTextInput()}

        </div>
    );
}