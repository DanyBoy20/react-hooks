import { useState, useEffect, useRef } from "react";

const useFetch = ( url ) => {

  // para mantener la referencia cuando este hook (useFetch) esta vivo o cuando el componente que lo usa sigue montado
  // cuando cambiemos ñps valores de isMounted, no deseamos renderizar nuevamente, solo mantener la refrencia al valor
  const isMounted = useRef(true);

  const [ state, setState ] = useState({ data: null, loading: true, error: null });

  useEffect( () => {
    // cuando el componente se desmonte, cambiamos a false
    // solo para guardar la refrencia
    return () => {
      isMounted.current = false;
    }
  }, []); // [] = ejecutar este useEffect cuando el componente se carga por rimera vez

  useEffect( () => {

    setState({ data: null, loading: true, error: null});


    fetch(url)
    .then( resp => resp.json())
    .then( data => {

      // EJEMPLO: si isMounted.current es True, significa que el componente todavia esta montado, entonces llamamos a setState
      // si es false, es por que el componente esta desmontado, entonces no hacemos nada
      /* setTimeout( () => {
        if(isMounted.current){
          setState({
            loading: false,
            error: null,
            data
          });
        }else{
          console.log("setState no se llamó")
        }
      }, 4000); */

      // Ejemplo final, sin hacer delay con setTimeout
      if(isMounted.current){
        setState({
          loading: false,
          error: null,
          data
        });
      }

    })
  }, [url]);
  return state;  
};

export default useFetch;
