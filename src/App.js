import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./home/pages/Home";
import Palms from "./palms/pages/Palms";
import Signin from "./signin/pages/Signin";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signin />} />
        <Route path="/home" element={<Home />} />
        <Route path="/palms" element={<Palms />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
