//Pintar la informacion del usuario
import React from "react";
//Utilizar informacion del perfil ya loggeado
import { useAuth0 } from '@auth0/auth0-react';
//import JSONPretty from 'react-json-pretty';

const Perfil = () => {
    //Checar si el usuario esta autenticado o nel
    const {user, isAuthenticated} = useAuth0();
    return(
        isAuthenticated && (
            <div>
                {/*Interfaz del usuario loggeado */}
                <div>
                    <img src={user.picture} alt={user.name}/>
                    <h2>{user.name}</h2>
                    <p>{user.email}</p>

                    {/* Manera de ver los datos del usuario en formato JSON*/}
                    {/*<JSONPretty data={user}></JSONPretty>*/}
                </div>
            </div>
        )
    );
};

export default Perfil;