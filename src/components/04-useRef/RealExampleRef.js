import { useState } from 'react';
import MultipleCustomHooks from '../03-examples/MultipleCustomHooks';
import './focusScreen.css';

const RealExampleRef = () => {

  const [show, setShow] = useState(false);

  return (
    <div>
      <h1>Real Eample Ref</h1>
      <hr />

      { show && <MultipleCustomHooks /> }

      <br /><br />
      <button 
        className="btn btn-primary mt-15"
        onClick={ () => setShow( !show ) }
      >
        Show/Hide
      </button>

    </div>
  );
};

export default RealExampleRef;
