import React, {useRef} from 'react'

interface ITODOFormProps {
    onAdd(title: string): void
}

export const TODOForm: React.FC<ITODOFormProps> = props => {

    // const [title, setTitle] = useState<string>('')

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value)
    // }

    const ref = useRef<HTMLInputElement>(null)

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = ''
        }  
    }

    return (
        <div className="input-field mt2">
            <input
                // value={title}
                // onChange={changeHandler}
                ref={ref}
                onKeyPress={keyPressHandler}
                type="text"
                id="title" 
            />
            <label htmlFor="tite">Input your make</label>
        </div>
    )
}