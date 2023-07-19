import React from 'react'
import { Link } from 'react-router-dom'
import heroSVG from '../assets/hero.svg'
import '../styles/home.css'

function HomePage() {
    return (
        <main id="hero">
            <div className="content-hero">
                <div className="greeting">
                    <p>Ohayou Gozaimasu....</p>
                </div>
                <div className="main-word">
                    <h2>Temukan Event Favoritmu</h2>
                </div>
                <div className="description">
                    <p>Indo JFest  merupakan platform
                        berbasis Website yang membuat
                        EO dan Visitor mencari Event Jejepangan dengan mudah.</p>
                </div>

                <div className='sign-in'>
                    <p>Masuk untuk melanjutkan.</p>
                    <Link to='/'>Visitor</Link>
                    <Link to='/'>Event Organizer</Link>
                </div>

            </div >
            <div className="image-hero">
                <img src={heroSVG} />
            </div>
        </main >
    )
}

export default HomePage