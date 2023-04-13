import { Route, Routes } from "react-router-dom";
import FormDntic from "./components/dntic/FormDntic";
import Login from "./components/login/Login";
import Navbar from "./components/navbar/Navbar";
import UserForm from "./components/userForm/UserForm";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/validation-rh" element={<Login />} />
        <Route path="/validation-dntic" element={<FormDntic />} />
        
    </Routes>
    </div>
  );
}

export default App;
