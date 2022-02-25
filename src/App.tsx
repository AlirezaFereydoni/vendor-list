// Routing
import { BrowserRouter, Route, Routes } from "react-router-dom";

// Pages
import Main from "./pages/main";
import Vendor from "./pages/vendor";
import NotFound from "./pages/notFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/vendor" element={<Vendor />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
