import LandingPage from 'pages/LandingPage'
import SecuredPage from 'pages/SecuredPage'
import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import NavBar from 'components/NavBar/NavBar'
import React from 'react'

export default function AppRoutes() {
    return (
        <Router>
            <NavBar/>
                <Routes>
                    <Route exact path='/' element={<LandingPage />} />
                    <Route exact path='/secured' element={<SecuredPage />} />
                </Routes>
        </Router>
    )
}