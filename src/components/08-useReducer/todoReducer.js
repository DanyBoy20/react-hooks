
export const todoReducer = (state = [], action) => {
  switch (action.type) {
    case 'add':
      return [...state, action.payload];

    case 'delete':
      // regresa los todos (estado) pero que el todo.id sea diferente al todo que deseamos borrar (action.payload)
      return state.filter( todo => todo.id !== action.payload);

    case 'toggle':

      // 01 ********** FORMA LARGA DE HACERLO **********
      // ***********************************************
      // el state contiene todos los todos, con map lo recorremos
      // return state.map( todo => { // por cada todo del state
      //   // si todo.id del state es igual al id que nos envia el payload
      //   // significa que ese todo.id es el que debemos cambiar
      //   if( todo.id === action.payload){ 
      //     return{
      //       ...todo,  // extraemos todos los elementos de ese todo.id  
      //       done: !todo.done  // propiedad done se cambia a su contrario (true/false))      
      //     } 
      //   }else{
      //     return todo;
      //   }
      // });

      // 02 ********** FORMA CORTA DE HACERLO **********
      // ***********************************************
      return state.map( todo => 
        // si la condicion es true, extraemos el todo y cambiamos el valor de done
        // caso contrario, solo regresamos el todo tal cual esta. y cambiamos
        (todo.id === action.payload) ? {...todo, done: !todo.done} : todo)

    default:
      return state;
  }
};
