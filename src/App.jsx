import React, { useContext, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { AppContext } from "../store/AppContext.jsx";
import SearchBar from "./SearchBar.jsx"
function App() {
  return (
    <>
      <SearchBar />
      <Movies />
    </>
  )
}

export default App