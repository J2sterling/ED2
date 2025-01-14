const inicialState =[{

    id: 1,
    todo: "Hacer los challenges",
    done:false
}];

const todoReducer = ( state= inicialState, action= {}) =>{

    if ( action.type === '[TODO] add todo'){
        return [...state, action.payload]
    }
    return state;
}

let todos= todoReducer();

const newTodo ={

    id: 2,
    todo: "Avances del proyecto",
    done:false
}
const addTodoAction = {

    type: '[TODO] add todo',
    payload: newTodo,
}

todos = todoReducer (todos, addTodoAction)

console.log(todos);