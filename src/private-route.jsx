import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkAuth from "./auth/check-auth";

function PrivateRoute({ children }) {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkAuth()
      .then((isAuth) => {
        if (!isAuth) {
          window.location.href = "/login";
        }
        setIsLoading(false);
      })
      .catch(() => {
        window.location.href = "/login";
      });
  }, [navigate]);

  if (isLoading) {
    return <div>Carregando...</div>; // Mostrar um spinner de carregamento aqui
  }

  return children;
}

export default PrivateRoute;
