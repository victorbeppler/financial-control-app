import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./page/home";
import Environment from "./page/environment";
import Login from "./page/login";
import Register from "./page/register";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Environment />} />
        <Route path="/environment/:idEnvironment" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        {/* <Route path="/register" element={<Form />} /> */}
        <Route path="*" element={<h1>Not Found</h1>} />
      </Routes>
    </Router>
  );
}

export default App;
