import { useInView } from 'react-intersection-observer';
import Soundcloud from "../../../assets/images/icos/soundcloud.png";
import Youtube from "../../../assets/images/icos/youtube.png";

export default function Playlists() {

    const { ref: myRef, inView: visible } = useInView();

    return (
        <div className='playlist'>

            <span ref={myRef} className='flag2'></span>

            <h2 className={`playlist__title ${visible ? "visible" : ""}`}>Vive la música en nuestras <span>playlists</span></h2>
            <p className={`playlist__description ${visible ? "visible" : ""}`}>Descubre y disfruta nuestras playlists seleccionadas para cada momento especial.</p>
            
            <div className='playlist__nav flex'>
                <a className={`playlist__nav-item ${visible ? "visible" : ""}`} href="https://soundcloud.com/eventazzo" target="_blank" rel="noopener noreferrer">
                    <img src={Soundcloud} alt='soundcloud' />
                </a>
                <a className={`playlist__nav-item ${visible ? "visible" : ""}`} href="https://www.youtube.com/@eventazzo" target="_blank" rel="noopener noreferrer">
                    <img src={Youtube} alt='youtube' />
                </a>
            </div>

        </div>
    )
}