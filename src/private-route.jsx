import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import checkAuth from "./auth/check-auth";
import LoadingSpinner from "./components/Loading";

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
    return <LoadingSpinner />; // Mostrar um spinner de carregamento aqui
  }

  return children;
}

export default PrivateRoute;
