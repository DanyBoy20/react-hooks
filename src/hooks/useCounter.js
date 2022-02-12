import { useState } from 'react';

const useCounter = (initialSate = 10) => {

  const [counter, setCounter] = useState(initialSate);

  /* const increment = (factor = 1) => {
    setState( state + factor );
  }

  const decrement = (factor = 1) => {
    setState( state - factor );
  } */

  const increment = () => {
    setCounter( counter + 1 );
  }

  const decrement = () => {
    setCounter( counter - 1 );
  }

  const reset = () => {
    setCounter( initialSate );
  }

  return {
    counter,
    increment,
    decrement,
    reset
  };

};

export default useCounter;
