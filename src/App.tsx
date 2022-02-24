// Routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Main from "./pages/main";
import Vendor from "./pages/vendor";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="*" element={<div>Not Found</div>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
