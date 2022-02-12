import { useState, useEffect } from 'react';
import Message from './Message';
import './simpleForm.css';

const SimpleForm = () => {

    const [formState, setFormState] = useState({
      name: '',
      email: ''
    });

    const { name, email } = formState;

  useEffect( () => {
    // console.log("hey");
  }, []);

  useEffect( () => {
    // console.log("formState cambio");
  }, [formState]);

  useEffect( () => {
    // console.log("email cambio");
  }, [email]);

  const handleInputChange = ({target}) => {
    setFormState({
      ...formState,
      [target.name] : target.value
    });    
  };


  return (
    <>
      <h1>useEffect</h1>
      <hr />
      <div className="form-group">
        <input 
          type="text"
          className="form-control"  
          name="name"
          placeholder="Tu nombre"
          autoComplete="off"
          value={name}
          onChange={ handleInputChange }
        />
        <input 
          type="email"
          className="form-control"
          name="email"
          placeholder="Tu email"
          autoComplete="off"
          value={email}
          onChange={ handleInputChange }
        />
        <br />

        { name === '123' && <Message />}

      </div>
    </>
  );
};

export default SimpleForm;
