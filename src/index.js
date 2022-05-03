import React from "react";
import ReactDOM from "react-dom/client";
import App from 'App'
import { KeycloackContextProvider } from "KeycloakContext"

const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(rootElement)

root.render(
    <KeycloackContextProvider>
        <App/>
    </KeycloackContextProvider>
)