import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Main from "./Main";
import Description from "./components/Description/Description";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/worldview" element={<Description />} />
        <Route path="/*" element={<Main />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
