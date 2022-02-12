import { useReducer, useEffect } from "react";
import { todoReducer } from "./todoReducer";
import TodoList from "./TodoList";
import TodoAdd from "./TodoAdd";
import "./styles.css";

const init = () => {
  // localStorage.getItem(todos) regresara un string con los todos
  // localStoorage.getItem('todos123') regresa null por que no existe todos123
  // si hacemos JSON.parse(nul) regresa null, por lo tanto:
  // si hay todos, regresalos, si no hay regresa null, 
  // por eso utilizaos el operador OR ( || ) para que regrese
  // un arreglo vacio en lugar de null
  return JSON.parse(localStorage.getItem('todos')) || [];
  /* return [{
      id: new Date().getTime(),
      desc: "Aprender React",
      done: false,
  }]; */
}

const TodoApp = () => {

  const [todos, dispatch] = useReducer(todoReducer, [], init);    

  /* console.log(description); */
  // si los todos cambian, ejecuta useEffect y guarda/actualiza localstorage
  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));    
  }, [todos]); 

  const handleDelete = (todoId) => {
    /* console.log(todoId); */
    const action = {
      type: 'delete',
      payload: todoId
    }
    dispatch(action);
  }

  const handleToggle = (todoId) => {
    /* console.log(todoId); */
    const action = {
      type: 'toggle',
      payload: todoId
    }
    dispatch(action);
  }

  const handleAddTodo = (newTodo) => {
    dispatch({
      type: 'add',
      payload: newTodo
    });
  }

  return (
    <div>
      <h1>Hook useReducer</h1>
      <hr />
      <h2>TodoApp ( {todos.length} )  </h2>
      <hr />

      <div className="row">

        <div className="col-7">
          <TodoList 
            todos={todos} 
            handleDelete={handleDelete} 
            handleToggle={handleToggle} 
          />
        </div>

        <div className="col-5">
          
          <TodoAdd handleAddTodo={ handleAddTodo } />

        </div>

      </div>
      
    </div>
  );
};

export default TodoApp;
