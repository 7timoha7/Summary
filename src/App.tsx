import React from 'react';
import AppToolBar from "./components/AppToolBar";
import {CssBaseline} from "@mui/material";
import Summary from "./components/Summary";
import {Route, Routes} from "react-router-dom";
import NoPage from "./components/NoPage/NoPage";
import Main from "./components/Main/Main";


function App() {
    return (
        <>
            <CssBaseline/>
            <AppToolBar/>


            <Routes>
                <Route path={'/'} element={<Main/>}/>
                <Route path={'/summary'} element={<Summary/>}/>
                {/*<Route path={'/artistAdd'} element={*/}
                {/*    <ProtectedRoute isAllowed={user !== null}>*/}
                {/*        <ArtistAdd/>*/}
                {/*    </ProtectedRoute>*/}
                {/*}/>*/}
                {/*<Route path={'/albums/:id'} element={<Albums/>}/>*/}
                {/*<Route path={'/albumsAdd'} element={*/}
                {/*    <ProtectedRoute isAllowed={user !== null}>*/}
                {/*        <AlbumAdd/>*/}
                {/*    </ProtectedRoute>*/}
                {/*}/>*/}
                {/*<Route path={'/tracks/:id'} element={<Tracks/>}/>*/}
                {/*<Route path={'/trackAdd'} element={*/}
                {/*    <ProtectedRoute isAllowed={user !== null}>*/}
                {/*        <TrackAdd/>*/}
                {/*    </ProtectedRoute>*/}
                {/*}/>*/}
                {/*<Route path="/login" element={<Login/>}/>*/}
                {/*<Route path="/register" element={<Register/>}/>*/}
                {/*<Route path="/trackHistory" element={<TrackHistory/>}/>*/}
                <Route path={'/*'} element={<NoPage/>}/>
            </Routes>
        </>
    );
}

export default App;
