//Pintar la informacion del usuario
import React from "react";
//Utilizar informacion del perfil ya loggeado
import { useAuth0 } from '@auth0/auth0-react';

const LogoutButton = () => {
    //Salir 
    const {logout} = useAuth0();
    return(
        <button onClick={() => logout()}>
            Salir
        </button>
    )
}

export default LogoutButton;