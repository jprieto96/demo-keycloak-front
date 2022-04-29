import LandingPage from 'pages/LandingPage'
import SecuredPage from 'pages/SecuredPage'
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import NavBar from 'components/NavBar/NavBar'
import React from 'react'

export default function AppRoutes() {
    return (
        <Router>
            <NavBar/>
                <Switch>
                    <Route exact path='/'>
                        <LandingPage/>
                    </Route>
                    <Route exact path='/secured'>
                        <SecuredPage/>
                    </Route>
                </Switch>
        </Router>
    )
}