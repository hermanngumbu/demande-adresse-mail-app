import { Route, Routes } from "react-router-dom";
import FormDntic from "./components/dntic/FormDntic";
import Login from "./components/login/Login";
import UserForm from "./components/userForm/UserForm";
import Navbar from "./components/navbar/Navbar";
import Rh from "./components/rh/Rh";
import NotFoundPage from "./components/NotFoundPage";

function App() {
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/validation-rh" element={<Rh />} />
        <Route path="/validation-dntic" element={<FormDntic />} />
        <Route path="*" element={<NotFoundPage />} />
        
    </Routes>
    </div>
  );
}

export default App;
