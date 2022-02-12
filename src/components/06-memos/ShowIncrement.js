import { memo } from "react";

const ShowIncrement = memo(({ increment }) => {
  console.log("ME VOLVI A GENERAR");

  return (
    <button
      className="btn btn-primary"
      onClick={() => {
        increment(5);
      }}
    >
      Increment
    </button>
  );
});

export default ShowIncrement;
