import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./components/Home";
import { GoTo } from "./components/GoTo";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path=":slug" element={<GoTo />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
