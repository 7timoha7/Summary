import React from 'react';
import AppToolBar from "./components/AppToolBar";
import {CssBaseline} from "@mui/material";
import Summary from "./components/Summary";
import {Route, Routes} from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Main from "./components/Main/Main";
import Education from "./components/Education/Education";
import Experience from "./components/Experience/Experience";


function App() {
  return (
    <>
      <CssBaseline/>
      <AppToolBar/>

      <Routes>
        <Route path={'/'} element={<Main/>}/>
        <Route path={'/summary'} element={<Summary/>}/>
        <Route path={'/education'} element={<Education/>}/>
        <Route path={'/experience'} element={<Experience/>}/>

        <Route path={'/*'} element={<NoPage/>}/>
      </Routes>
    </>
  );
}

export default App;
