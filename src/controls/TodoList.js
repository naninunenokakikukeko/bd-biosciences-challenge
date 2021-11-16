import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContextProvider';

export default function TodoList(props) {
    let { todoState, dispatch } = useContext(TodoContext);
    let name = props.name;
    let className = props.className;
    let items = todoState[props.contextKey];

    return (
        <section>
            <h4>{name}</h4>
            <ul className={className}>
                {
                    items.map(todo => {
                        return (
                            <li key={todo.id} onClick={(e) => {
                                if (props.contextKey === 'todo') {
                                    dispatch({
                                        type: 'FINISH_TODO',
                                        todo: todo
                                    })
                                }
                            }
                            }>
                                <span>{todo.name}</span>
                            </li>
                        )
                    })
                }
            </ul>
        </section>
    )
}
