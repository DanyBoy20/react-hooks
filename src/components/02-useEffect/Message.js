import { useEffect, useState } from "react";

const Message = () => {

  /* useEffect(() => {
    console.log("componente montado");  // Se ejecuta al montar el componente
    return () => {
      console.log("componente desmontado"); // se ejecuta cuando desmontamos el componente
    };
  }, []); */

  const [ coords, setCoords ] = useState( { x: 0, y: 0 } );
  const { x, y } = coords;

  useEffect(() => {

    const mouseMove = (e) => {
      const coords = { x: e.x, y: e.y };
      setCoords(coords);
    }

    window.addEventListener('mousemove', mouseMove);
    
    return () => {
      window.removeEventListener('mousemove', mouseMove);
    };
  }, []);


  return (
    <>
      <h3>YOU ROCKS</h3>
      <p>
        x: {x} y: {y}
      </p>
    </>
  );
};

export default Message;
