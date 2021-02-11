import React, {useState} from 'react'


export const TODOForm: React.FC = () => {

    const [title, setTitle] = useState<string>('')

    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTitle(event.target.value)
    }

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if(event.key === 'Enter') {
            console.log(title)
        }  
    }

    return (
        <div className="input-field mt2">
            <input
                value={title}
                onChange={changeHandler}
                onKeyPress={keyPressHandler}
                type="text"
                id="title" 
            />
            <label htmlFor="tite">Input your make</label>
        </div>
    )
}