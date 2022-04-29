import React, { useContext } from 'react'
import './NavBar.css'

// CONTEXTS
import { KeycloackContext } from 'KeycloakContext'
import { Link } from 'react-router-dom'

const NavBar = () => {
    const { logout } = useContext(KeycloackContext)

    return (
        <nav>
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/secured'}>Secured</Link>
            <button className='nav-link' onClick={() => logout()}>
                Log Out
            </button>
        </nav>
    )
}

export default NavBar