/* ************************************************* */
/* CONCEPTO GENERAL DEL FUNCIONAMIENTO DE UN REDUCER */
/* ************************************************* */

// Estado inicial (en este caso es un arreglo de tareas (todos))
const initialState = [
  {
    id: 1,
    todo: "Comprar pan",
    done: false,
  },
];

// Definimos una simple funcion (sera el reducer) que recibe un state que si no tiene valor, se le asigna por defecto el initialState
// y recibe una accion (action) quien es la encargada de modificar el state, retornando un nuevo estado (state)
// NOTA: esta funcion no puede peticiones asincronas ni tener efectos secundarios
// esta funcion tiene que resolverse con todos sus argumentos (state y action) y regresar un nuevo estado: el estado resultante (return state)
const todoReducer = (state = initialState, action) => {
  // action?.type significa:  si "aciton" tiene algun valor (action?) entonces lee el tipo (type)
  if (action?.type === "agregar") {
    return [...state, action.payload];
  }
  return state;
};

// aqui solo inicializamos el todoreducer (lo ejecutamos) y lo que retorna (el estado - state) lo guardamos en la variable "todos"
let todos = todoReducer();

// este es la nueva tarea (todo) que vamos a agregar
const newTodo = [
  {
    id: 2,
    todo: "Leche",
    done: false,
  },
];

// agregamos el nuevo todo (newTodo) mediante una accion, y esta accion esla que le mandamos al reducer (todoReducer)
const agregarTodoAction = {
  type: "agregar",
  payload: newTodo,
};

// ejecutamos todoReducer con el estado (todos) y la accion para cambiar el estado (agregarTodoAction)
todos = todoReducer(todos, agregarTodoAction);
console.log(todos);
