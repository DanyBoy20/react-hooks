import './counterApp.css';
import useCounter from '../../hooks/useCounter';

const CounterWithCustomHook = () => {

  const {state, increment, decrement, reset} = useCounter(10);

  return (
    <div>
      <h1>Counter with custom hook: { state }</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ () => increment(2) }
      >
        +1
      </button>&nbsp;
      <button 
        className="btn btn-primary"
        onClick={ () => decrement(2) }
      >
        -1
      </button>&nbsp;
      <button 
        className="btn btn-primary"
        onClick={ reset }
      >
        RESET
      </button>
    </div>
  );
};

export default CounterWithCustomHook;
