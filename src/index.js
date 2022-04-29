import React from "react";
import ReactDOM from "react-dom";
import App from 'App'
import { KeycloackContextProvider } from "KeycloakContext"
 
ReactDOM.render(
    <KeycloackContextProvider>
        <App/>
    </KeycloackContextProvider>,
    document.getElementById("root")
);