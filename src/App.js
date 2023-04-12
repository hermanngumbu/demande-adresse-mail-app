import { Route, Routes } from "react-router-dom";
import FormDntic from "./components/dntic/FormDntic";
import Login from "./components/login/Login";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" />
        <Route path="/login" element={<Login />} />
        <Route path="/validation-rh" element={<Login />} />
        <Route path="/validation-dntic" element={<FormDntic />} />
        
    </Routes>
    </div>
  );
}

export default App;
