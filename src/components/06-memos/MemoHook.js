import useCounter from "../../hooks/useCounter";
import { useState, useMemo } from "react";
import { procesoPesado } from "../../helpers/procesoPesado";
import "./memorize.css";

const MemoHook = () => {
  const { counter, increment } = useCounter(650);
  const [show, setShow] = useState(true);
  // si el [counter] cambia, necesito una nueva version memorizada del resultado de esa funcion
  const memoProcesoPesado = useMemo(() => procesoPesado(counter), [counter]);

  return (
    <div>
      <h1>Memo Hook</h1>
      <h3>
        Memorize <small>{counter}</small>
      </h3>
      <hr />

      <p> {memoProcesoPesado}</p>

      <button className="btn btn-primary" onClick={increment}>
        +1
      </button>

      <button
        className="btn btn-outline-primary ml-13"
        onClick={() => {
          setShow(!show);
        }}
      >
        Show/Hide {JSON.stringify(show)}
      </button>
    </div>
  );
};

export default MemoHook;
