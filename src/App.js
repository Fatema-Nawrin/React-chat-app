import { useAuthState } from "react-firebase-hooks/auth";
import { Routes, Route } from "react-router-dom";
import './App.css';
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {

  return (
    <div className="h-screen bg-blue-50">
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
      </Routes>

    </div>

  );
}

export default App;
