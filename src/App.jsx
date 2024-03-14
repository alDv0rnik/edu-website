import React from 'react'
import Home from './pages/Home'
import Content from "./pages/Content.jsx";
import NotFound from "./pages/NotFound.jsx";
import {Route, Routes} from "react-router-dom";
import {PATHS} from "./constants.js";


function App() {
    return (
        <>
            <Routes>
                <Route exaxt path={`${PATHS.HOME}`} element={<Home/>}/>
                <Route exaxt path={`${PATHS.CONTENT}`} element={<Content/>}/>
                {/*<Route exaxt path={`${PATHS.TEST}`} element={<Test/>}/>*/}
                <Route path="*" element={<NotFound/>}/>
            </Routes>
        </>
    )
}

export default App
