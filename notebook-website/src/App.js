import "./App.css";
import Homepage from "./components/homepage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PLP_notebook from "./components/PLP_notebook";
import PLP_planner from "./components/PLP_planner";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/notebooks" element={<PLP_notebook />} />
          <Route path="/products/planners" element={<PLP_planner />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
