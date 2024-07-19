import './App.css';
import LogoutButton from './componentes/LogoutButton';
import Perfil from "./componentes/Perfil";

// Utilizar información del perfil ya logueado
import { useAuth0 } from '@auth0/auth0-react';
import { useEffect } from 'react';

function App() {
  // Función para checar el inicio de sesión o salida del mismo | TRUE or FALSE
  const { isAuthenticated, isLoading, loginWithRedirect } = useAuth0();

  // Redirige automáticamente a la página de inicio de sesión si no está autenticado
  useEffect(() => {
    if (!isAuthenticated && !isLoading) {
      loginWithRedirect();
    }
  }, [isAuthenticated, isLoading, loginWithRedirect]);

  // Si la aplicación está cargando, muéstrame una animación de carga
  if (isLoading) return <h1>Cargando ...</h1>;

  return (
    <div className="App">
      <h1>Aplicación</h1>
      {/* Si está autenticado, muéstrame LogoutButton, sino muestra LoginButton */}
      {isAuthenticated ? <LogoutButton /> : <h2>Redirigiendo a la página de inicio de sesión...</h2>}
      <br />
      <br />
      <Perfil />
    </div>
  );
}

export default App;
