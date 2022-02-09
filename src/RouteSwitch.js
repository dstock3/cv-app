import React from 'react'
import App from './App'
import { HashRouter, Routes, Route } from "react-router-dom"
import ReactDOM from 'react-dom';

const RouteSwitch = () => {

    return (
        <HashRouter>
                <Routes>
                        <Route path="/" element={
                            <App />
                        } />

                        <Route path="/pdf" element={
                            <App />
                        } />    
                </Routes>
        </HashRouter>
    )
}

export default RouteSwitch;