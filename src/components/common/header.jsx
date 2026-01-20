import { useState } from 'react'

export default function Header() {
    const [menuActive, setMenuActive] = useState(false);

    const toggleMenu = () => {
        setMenuActive(!menuActive);
    }

    return (
        <header className='header flex'>
            <nav className='header__socials'>
                <ul className='header__socials__list flex'>
                    <a className='header__socials__list-item flex' href="https://soundcloud.com/eventazzo" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/images/icos/soundcloud.png' alt='soundcloud' />
                    </a>
                    <a className='header__socials__list-item flex' href="https://www.instagram.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/images/icos/instagram.png' alt='instagram' />
                    </a>
                    <a className='header__socials__list-item flex' href="https://www.facebook.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/images/icos/facebook.png' alt='facebook' />
                    </a>
                    <a className='header__socials__list-item flex' href="https://www.youtube.com/@eventazzo" target="_blank" rel="noopener noreferrer">
                        <img src='/assets/images/icos/youtube.png' alt='youtube' />
                    </a>
                </ul>
            </nav>

            <nav className='hamburguerMenu'>
                <div className='hamburguerMenu-item flex' onClick={toggleMenu}>
                    <div className={`hamburguerMenu-item--bar ${menuActive ? 'active' : ''}`}></div>
                    <div className={`hamburguerMenu-item--bar ${menuActive ? 'active' : ''}`}></div>
                    <div className={`hamburguerMenu-item--bar ${menuActive ? 'active' : ''}`}></div>
                </div>
            </nav>

            <nav className={`overlayMenu flex ${menuActive ? 'active' : ''}`}>
                <ul className='overlayMenu__list flex'>
                    <li className='overlayMenu__list-item'>DJs</li>
                    <li className='overlayMenu__list-item'>Contratar</li>
                    <li className='overlayMenu__list-item'>Eventos</li>
                </ul>
            </nav>
        </header>
    )
}