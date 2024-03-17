import { Routes, Route } from "react-router-dom";
import Home from "./components/screens/home/Home";
import Login from "./components/screens/login/Login";
import Signup from "./components/screens/login/Signup";
import SignupStep2 from "./components/screens/login/Signup.step2";
import UserPage from "./components/screens/user/UserPage";
import UserEditPage from "./components/screens/userEdit/UserEdit";
import CompletedTaskInfo from "./components/screens/info/CompletedTaskInfo";
import CompletedOrderInfo from "./components/screens/info/CompletedOrderInfo";
import CompletedCompitionInfo from "./components/screens/info/CompletedCompitionInfo";
import CompitionInfo from "./components/screens/info/CompitionInfo";
import OrderInfo from "./components/screens/info/OrderInfo";
import TaskInfo from "./components/screens/info/TaskInfo";
import ProjectInfo from "./components/screens/project/ProjectInfo";

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
            <Route path="edit" element={<UserEditPage />} />
          </Route >
          <Route path="info/">
            <Route path="task" element={<CompletedTaskInfo />} />
            <Route path="order" element={<CompletedOrderInfo />} />
            <Route path="compition" element={<CompletedCompitionInfo />} />
            <Route path="project" element={<ProjectInfo />} />
          </Route>
            <Route path="task" element={<TaskInfo />} />
            <Route path="order" element={<OrderInfo />} />
            <Route path="compition" element={<CompitionInfo />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
