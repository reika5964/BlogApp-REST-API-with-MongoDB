//import Home from "./pages/home/Home";
//import Single from "./pages/single/Single";
import Settings from "./pages/settings/Settings";
import Write from "./pages/write/Write";
import Topbar from "./components/topbar/Topbar";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/home/Home";
import Single from "./pages/single/Single"

function App() {
  const user = false;
  return (
    <>
      <Topbar/>
      <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path="/register" element={user ? <Home/>:<Register />} />
        <Route path="/login" element={user ? <Home/>:<Login />} />
        <Route path="/write" element={user ? <Write/>:<Register />} />
        <Route path="/settings" element={user ? <Settings/>:<Register />} />
        <Route path="/post/:postId" element={<Single />} />
      </Routes>
     </>  

  );
}

export default App;
