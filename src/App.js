import { Routes, Route } from "react-router-dom";
import './App.css';
import ChatPage from "./components/ChatPage";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/chat" element={<ChatPage />}></Route>
      </Routes>

    </div>
  );
}

export default App;
