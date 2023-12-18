import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/screens/home/Home";
import Login from "./components/screens/login/Login";
import Signup from "./components/screens/login/Signup";
import SignupStep2 from "./components/screens/login/Signup.step2";
import UserPage from "./components/screens/user/UserPage";

function App() {
  return (
    <>
      <Routes>
        <Route path="/">
          <Route index element={<Home />} />
          <Route path="signup" element={<Signup />} />
          <Route path="signin/">
            <Route index element={<Login />} />
            <Route path="identifier" element={<SignupStep2 />} />
          </Route>
          <Route path="user/">
            <Route index element={<UserPage />} />
            <Route path="edit" element="" />
          </Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
