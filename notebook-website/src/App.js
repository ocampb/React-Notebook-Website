import "./App.css";
import Homepage from "./components/homepage";
import { render } from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PLP_notebook from "./components/PLP_notebook";
import PLP_planner from "./components/PLP_planner";
import PLP_pens from "./components/PLP_pens";
import { Provider } from "react-redux";
import { store, persistor } from "./store";
import { PersistGate } from "redux-persist/integration/react";

function App() {
  return (
    <div>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}></PersistGate>
      </Provider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/products/notebooks" element={<PLP_notebook />} />
          <Route path="/products/planners" element={<PLP_planner />} />
          <Route path="/products/pens" element={<PLP_pens />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
