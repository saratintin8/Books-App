import { Routes, Route } from "react-router-dom";
import Login from "./Components/Login";
import Detail from "./Components/Detail";
import ProtectedRoutes from "./Components/ProtectedRoutes";

function App() {
  return (
    <div>

      <Routes>
        <Route path='/' element={<Login />} />
        <Route element={<ProtectedRoutes />} />
        <Route path='detail' element={<Detail />} />
      </Routes>

    </div>
  );
}

export default App;
