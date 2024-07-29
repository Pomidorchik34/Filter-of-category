import "./App.css";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

import Details from "./pages/details";
import Home from "./pages/home";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/details" element={<Details />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
{
}
