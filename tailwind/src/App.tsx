import { Routes, Route } from "react-router-dom";
import "./App.css"
import NavBar from "./component/NavBar"
import Home from "./pages/Home";
import About from "./pages/About";
import LogIn from "./pages/LogIn";
function App() {

  return (
    <>
      <NavBar/>
      <Routes>
        <Route path="/Home" element={<Home></Home>}></Route>
        <Route path="/About" element={<About></About>}></Route>
        <Route path="/LogIn" element={<LogIn></LogIn>}></Route>
      </Routes>

      
      
    </>
  )
}

export default App
