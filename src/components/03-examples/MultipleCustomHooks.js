import useCounter from '../../hooks/useCounter';
import useFetch from '../../hooks/useFetch';
import './multipleCustomHooks.css';

const MultipleCustomHooks = () => {

  const { counter, increment } = useCounter(1);

  const { loading, data} = useFetch(`https://www.breakingbadapi.com/api/quotes/${counter}`);

  // destructura author y quote, si hay data (!! cambia null a false), entonces extrae la data en la posicion cero
  const{ author, quote } = !!data && data[0];

  return (
    <>
      <h1>Breaking Bad Quotes</h1>
      <hr />

      {loading ? 
          (<div className="alert alert-info text-center">
            Loading ...
          </div>) 
        : 
          (<blockquote className="blockquote text-right">
            <p className="mb-0">{ quote }</p>
            <footer><cite className="blockquote-footer">{ author }</cite></footer>
          </blockquote>)
      }

      <button 
        className="btn btn-primary"
        onClick={increment}
      >
        Siguiente Quote
      </button>

    </>
  );
};

export default MultipleCustomHooks;
