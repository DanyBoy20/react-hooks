import useCounter from "../../hooks/useCounter";
import { useState } from "react";
import Small from "./Small";
import "./memorize.css";

const Memorize = () => {
  const { counter, increment } = useCounter();

  const [show, setShow] = useState(true);

  return (
    <div>
      <h1>
        Memorize <Small value={counter} />
      </h1>
      <hr />

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

export default Memorize;
