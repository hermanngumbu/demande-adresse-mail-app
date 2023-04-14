import { Route, Routes, useNavigate } from "react-router-dom";
import FormDntic from "./components/dntic/FormDntic";
import Login from "./components/login/Login";
import UserForm from "./components/userForm/UserForm";
import Navbar from "./components/navbar/Navbar";
import Rh from "./components/rh/Rh";

function App() {
  
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/login" element={<Login />} />
            <Route path="/validation-rh" element={<Rh />} />
            <Route path="/validation-dntic" element={<FormDntic />} />
        
    </Routes>
    </div>
  );
}

export default App;
