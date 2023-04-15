import { Route, Routes} from "react-router-dom";
import Login from "./components/login/Login";
import UserForm from "./components/userForm/UserForm";
import Navbar from "./components/navbar/Navbar";
import Rh from "./components/rh/Rh";
import { useState } from "react";
import FormDntic from "./components/dntic/FormDntic";
import Details from "./components/details/Details";

function App() {
  const [demands, setDemands] = useState([])
  const [oneDemand, setOneDemand] = useState({
    nom: "",
    prenom: "",
    postnom: "",
    service: "",
    fonction: "",
    phone: "",
    email: "",
  })
  return (
    <div>
    <Navbar />
      <Routes>
        <Route path="/" exact element={<UserForm />} />
        <Route path="/login" element={<Login />} />
       <Route path="/validation-rh" element={<Rh demands={demands} setDemands={setDemands} />} />
        <Route path="/validation-dntic" element={<FormDntic demands={demands} setDemands={setDemands} setOneDemand={setOneDemand} oneDemand={oneDemand} />} />
        <Route path="/details" element={<Details oneDemand={oneDemand}  />} />
        
    </Routes>
    </div>
  );
}

export default App;
