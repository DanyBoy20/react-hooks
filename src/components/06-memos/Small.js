import { memo } from "react";

// Componente que queremos memorizar (pensemos en dejar este en cache para que no se renderice nuevamente), so las propiedades (value) cambian, emntonces se vuelve a renderizar
const Small = memo(({ value }) => {
  // sin usar memo
  console.log("COMPONENTE <SMALL /> RENDERIZADO NUEVAMENTE");

  return <small>{value}</small>;
});

export default Small;
