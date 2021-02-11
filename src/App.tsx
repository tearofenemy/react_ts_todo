import React, {useState} from 'react';
import {NavBar} from './components/NavBar'
import {TODOForm} from './components/TODOForm'
import {TODOList} from './components/TODOList'
import {ITODO} from './interfaces'

const App: React.FC = () => {

    const [todos, setTodos] = useState<ITODO[]>([])

    const addHandler = (title: string) => {
        const newTodo: ITODO = {
            title: title,
            id: Date.now(),
            completed: false
        }

        setTodos(prev => [newTodo, ...prev])

        //setTodos([newTodo, ...todos])
    }

    const toggleHandler = (id: number) => {
        setTodos(prev => 
            prev.map(todo => {
                if(todo.id === id) {
                    todo.completed = !todo.completed
                }
                return todo
            })
        )
    }

    const removeHandler = (id: number) => {
        setTodos(prev => 
            prev.filter(todo => todo.id !== id)
        )
    }

    return (
        <>
            <NavBar/>
            <div className="container">
                <TODOForm onAdd={addHandler} />
                <TODOList todos={todos} onToggle={toggleHandler} onRemove={removeHandler} />
            </div>
        </>
    )
}

export default App;