import React, { useContext } from 'react'

// CONTEXTS
import { KeycloackContext } from 'KeycloakContext'
import AppRoutes from 'routes/AppRoutes'

const App = () => {
    const { keycloackValue, authenticated } = useContext(KeycloackContext)

    return (
        (keycloackValue && authenticated) &&
        <div className='app-root'>
            <AppRoutes />
        </div>
    )
}

export default App