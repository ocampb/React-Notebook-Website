import "./App.css";
import Homepage from "./components/homepage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PLP from "./components/PLP";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/notebooks" element={<PLP />} />
          <Route path="/products/planners" element={<PLP />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
