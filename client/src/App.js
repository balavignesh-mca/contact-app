import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Register } from "./components/auth/reigster";
import { Welcome } from "./components/welcome";
import { Login } from "./components/auth/login";
import { Profile } from "./components/profile";
import { ErrorPage } from "./components/other/error404";

function App() {
  let token = localStorage.getItem("token");
 
  return (
    <div className="App">
      <Router>
        {token === null || token === undefined ? (
          <Routes>
            <Route index element={<Login />} />
            <Route path="register" element={<Register />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        ) : (
          <Routes>
            <Route path="welcome" element={<Welcome />} />
            <Route path="profile" element={<Profile />} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        )}
      </Router>
    </div>
  );
}

export default App;
