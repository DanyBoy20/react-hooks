import { useEffect } from 'react';
import useForm from '../../hooks/useForm';
import './simpleForm.css';

const FormWithCustomHook = () => {

    const [formValues, handleInputChange] = useForm({
      name: '',
      email: '',
      password: ''
    });

    const { name, email, password } = formValues;

    useEffect(() => {
      console.log("email cambio");
    }, [email]);

    const handleSubmit = (e) => {
      e.preventDefault();
      console.log( formValues );
    }

  return (
    <form onSubmit={ handleSubmit }>
      <h1>Form With Custom Hook</h1>
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
        <br />
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
        <input 
          type="password"
          className="form-control"
          name="password"
          placeholder="****"
          autoComplete="off"
          value={password}
          onChange={ handleInputChange }
        />
      </div>
      <br />
      <input type="submit" onClick={ handleSubmit } className="btn btn-primary" value="Enviar" />
    </form>
  );
};

export default FormWithCustomHook;

