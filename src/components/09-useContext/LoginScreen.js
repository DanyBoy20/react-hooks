import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { UserContext } from "./UserContext";


const LoginScreen = () => {

  const navegar = useNavigate();
  const { setUser } = useContext(UserContext);

  const usuario = {
    id: 1,
    name: 'Daniel'
  }

  const setUsuario = () => {
    setUser(usuario);
    navegar("/");
  }

  return (
    <div>
      <h1>HELLO LOGIN</h1>
      <hr />
      <button 
        className="btn btn-primary"
        onClick={ setUsuario }
      >Login</button>
    </div>
  );
};

export default LoginScreen;
