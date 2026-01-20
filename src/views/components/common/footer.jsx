import Logo from '../../../assets/images/logo/eventazzoBlanco.png';
import Soundcloud from '../../../assets/images/icos/soundcloud.png';
import Instagram from '../../../assets/images/icos/instagram.png';
import Facebook from '../../../assets/images/icos/facebook.png';
import Youtube from '../../../assets/images/icos/youtube.png';
import PhoneIco from '../../../assets/images/icos/phone.png';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
    const navigate = useNavigate();

    const ContactNav = () => {
        navigate('/contact');
    }

    return (
        <>
            <footer className="footer">
                <nav className='footer__socials flex'>
                    <p className="footer__socials__container-title">Redes Sociales</p>
                    <ul className='footer__socials__container__list'>
                        <a className='footer__socials__container__list-item' href="https://soundcloud.com/eventazzo" target="_blank" rel="noopener noreferrer">
                            <img src={Soundcloud} alt='soundcloud' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.instagram.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                            <img src={Instagram} alt='instagram' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.facebook.com/eventazzo/" target="_blank" rel="noopener noreferrer">
                            <img src={Facebook} alt='facebook' />
                        </a>
                        <a className='footer__socials__container__list-item' href="https://www.youtube.com/@eventazzo" target="_blank" rel="noopener noreferrer">
                            <img src={Youtube} alt='youtube' />
                        </a>
                    </ul>
                </nav>

                <div className='footer__phone flex'>
                    <p className="footer__phone-title">Contacto</p>
                    <div className='footer__phone-ico flex'>
                        <img src={PhoneIco} alt="Ico Telefono" /><span>644 056 943</span>
                    </div>
                </div>

                <div className='footer__contract flex'>
                    <p className="footer__contract-title">Contratanos</p>
                    <button className="footer__contract-button" onClick={ContactNav}>Contratar</button>
                </div>

                <img src={Logo} alt="eventazzo" className='footer__logo' />
            </footer>
        </>
    )
}