//Utilizar informacion del perfil ya loggeado
import {useAuth0, } from '@auth0/auth0-react';

const LoginButton = () => {
    //Funcion para redireccionar un login
    const { loginWithRedirect } = useAuth0();
    return <button onClick={()=>loginWithRedirect()}>Iniciar Sesión</button>;
};

export default LoginButton;