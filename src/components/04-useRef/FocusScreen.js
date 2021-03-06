import { useRef } from 'react';
import './focusScreen.css';

const FocusScreen = () => {

  const inputRef = useRef();
  /* console.log(ref); */

  const handleClick = () => {
    /* document.querySelector('input').select(); */
    inputRef.current.select();
    console.log(inputRef);
  }

  return (
    <div>
      <h1>Focus Screen</h1>
      <hr />

      <input 
        ref={inputRef}
        type="text"
        className="form-control"
        placeholder="Su nombre"
      />
         
      <button 
        className="btn btn-outline-primary mt-5"
        onClick={handleClick}
      >
        Focus
      </button>
    </div>
  );
};

export default FocusScreen;
