import "./App.css";
import Homepage from "./components/homepage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PLP_notebook from "./components/PLP_notebook";
import PLP_planner from "./components/PLP_planner";
import PLP_pens from "./components/PLP_pens";
import NotFoundPage from "./components/NotFoundPage";
import Collection1 from "./components/Collection1";
import Collection2 from "./components/Collection2";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/notebooks" element={<PLP_notebook />} />
          <Route path="/products/planners" element={<PLP_planner />} />
          <Route path="/products/pens" element={<PLP_pens />} />
          <Route path="/products/collection1" element={<Collection1 />} />
          <Route path="/products/collection2" element={<Collection2 />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
