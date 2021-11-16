import React, { useState, useContext } from 'react';
import { TodoContext } from '../contexts/TodoContextProvider';


export default function TodoForm(props) {
    let [newTodo, setNewTodo] = useState("");
    let { dispatch } = useContext(TodoContext);

    return (
        <form name="todoForm">
            <input type="text" name="todoName" placeholder="New Todo" value={newTodo} size="50" required
                onChange={(e) => {
                    setNewTodo(e.target.value);
                }}
            />
            <button type="button" name="todoCreate"
                onClick={(e) => {
                    dispatch({
                        type: 'CREATE_TODO',
                        todo: newTodo,
                    });
                    setNewTodo("");
                }}>
                Add
            </button>
        </form>
    );
}