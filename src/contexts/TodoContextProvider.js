import React, { createContext, useEffect, useReducer } from 'react';
import { v1 as uuidv1 } from 'uuid';

export const TodoContext = createContext();

const actionsMap = new Map();

actionsMap.set('CREATE_TODO', (state, action) => {
    return {
        todo: [...state.todo, {
            name: action.todo,
            id: uuidv1()
        }],
        done: state.done
    };
});

actionsMap.set('FINISH_TODO', (state, action) => {
    return {
        todo: state.todo.filter(todo => { return todo.name !== action.todo.name && todo.id !== action.todo.id; }),
        done: [...state.done, action.todo]
    };
});

function todoReducer(state, action) {
    let handlerFn = actionsMap.get(action.type);
    
    if (handlerFn) {
        return handlerFn(state, action);
    } else {
        return state;
    }
}

export default function TodoContextProvider(props) {
    let defaultValue = {todo:[], done:[]}

    let [ todoState, dispatch ] = useReducer(
        todoReducer,
        defaultValue,
        (defaultValue) => {
            let storedValue = localStorage.getItem('bd-biosciences-todo');
            return storedValue ? JSON.parse(storedValue) : defaultValue;
        }
    );

    useEffect(() => {
        localStorage.setItem('bd-biosciences-todo', JSON.stringify(todoState));
    }, [todoState]);

    return (
        <TodoContext.Provider value={{todoState, dispatch}}>
            {props.children}
        </TodoContext.Provider>
    );
};
