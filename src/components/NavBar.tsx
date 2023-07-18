import { NavLink } from 'react-router-dom'
import '../styles/NavBar.css'

function NavBar() {
    return (
        <nav>
            <div className="NavBar">
                <div className="logo">IndoJFest</div>
                <div className='menu'>
                    <NavLink className='a' to='/'>Home</NavLink>
                    <NavLink className='a' to='/event'>Event</NavLink>
                    <NavLink className='a' to='/eo'>Event Organizer</NavLink>
                    <NavLink className='a' to='/blog'>Blog</NavLink>
                </div>
            </div>
        </nav >
    )
}

export default NavBar