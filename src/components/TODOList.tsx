import React from 'react'
import { ITODO } from '../interfaces'

type TTODOListProps = {
    todos: ITODO[]
    onToggle(id: number): void
    onRemove(id: number): void
}

export const TODOList: React.FC<TTODOListProps> = ({todos, onToggle, onRemove}) => {
    return (
        <ul>
            {todos.map(todo => {
                const classes = ['todo']
                if(todo.completed) {
                    classes.push('completed')
                }
                return (
                    <li key={todo.id} className={classes.join(' ')}>
                        <label>
                            <input 
                                type="checkbox" 
                                checked={todo.completed}
                                onChange={onToggle.bind(null, todo.id)}
                            />
                            <span>{todo.title}</span>
                            <i className="material-icons red-text" onClick={() => onRemove(todo.id)}>delete</i>
                        </label>
                    </li>
                )
            })}
        </ul>
    )
} 