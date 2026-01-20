export default function Footer() {
    return (
        <>
            <footer className="footer">
                <nav className='footer__socials flex'>
                    <p className="footer__socials__container-title">Redes Sociales</p>
                    <ul className='footer__socials__container__list'>
                        <a className='footer__socials__container__list-item' href="https://soundcloud.com/eventazzo" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/icos/soundcloud.png' alt='soundcloud' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.instagram.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/icos/instagram.png' alt='instagram' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.facebook.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/icos/facebook.png' alt='facebook' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.youtube.com/@eventazzo" target="_blank" rel="noopener noreferrer">
                            <img src='/assets/images/icos/youtube.png' alt='youtube' />
                        </a>
                    </ul>
                </nav>

                <div className='footer__phone flex'>
                    <p className="footer__phone-title">Contacto</p>
                    <div className='footer__phone-ico flex'>
                        <img src='/assets/images/icos/phone.png' alt="Ico Telefono" /><span>644 056 943</span>
                    </div>
                </div>

                <div className='footer__contract flex'>
                    <p className="footer__contract-title">Contratanos</p>
                    <button className="footer__contract-button">Contratar</button>
                </div>

                <img src='/assets/images/logo/eventazzoBlanco.png' alt="eventazzo" className='footer__logo' />
            </footer>
        </>
    )
}