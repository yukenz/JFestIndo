import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className="NavBar">
                <div className="logo">IndoJFest</div>
                <div className='menu'>
                    <NavLink to='/'>Home</NavLink>
                    <NavLink to='/location'>Lokasi</NavLink>
                    <NavLink to='/event'>Event</NavLink>
                    <NavLink to='/eo'>Event Organizer</NavLink>
                    <NavLink to='/blog'>Blog</NavLink>
                </div>
            </div>
        </nav >
    )
}

export default NavBar