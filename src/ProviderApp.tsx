import React,{createContext, useState} from 'react';

type toDoContextState ={
    todos:String[],
    addTodo:(name:string) => void;
}

const defaultValues : toDoContextState = {
    todos : [],
    addTodo: () => {}
}

export const TodosContext = createContext<toDoContextState>(defaultValues);

export const TodosProvider:React.FC = ({children}) => {
    const [todos, setTodos] = useState<String[]>(defaultValues.todos)

    const addTodo = (newItem:string) => setTodos((previousTodos) => [...previousTodos, newItem]);

    return (
        <TodosContext.Provider value={{todos,addTodo}}>
            {children}
        </TodosContext.Provider>
    );
};