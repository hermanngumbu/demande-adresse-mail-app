import { Route, Routes } from "react-router-dom";
import FormDntic from "./components/dntic/FormDntic";
import Login from "./components/login/Login";
import UserForm from "./components/userForm/UserForm";

function App() {
  return (
    <div>
    
      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/login" element={<Login />} />
        <Route path="/validation-rh"  />
        <Route path="/validation-dntic" element={<FormDntic />} />
        
    </Routes>
    </div>
  );
}

export default App;
