import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import CategoryForm from "./components/Category";
import Environment from "./page/environment";
import Home from "./page/home";
import Login from "./page/login";
import PrivateRoute from "./private-route";
import Register from "./page/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Environment />
            </PrivateRoute>
          }
        />
        <Route
          path="/environment/:idEnvironment"
          element={
            <PrivateRoute>
              <Home />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/teste"
          element={
            <PrivateRoute>
              <CategoryForm />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
