import { useInView } from 'react-intersection-observer';
import { useNavigate } from 'react-router-dom';
import Playlists from './playlists';
import djs from '../../services/djs';

export default function DjSection() {

    const { ref: myRef, inView: visible } = useInView();
    const Navigate = useNavigate();
    
    function navDj(name) {
        Navigate(`dj/${name}`)
    }

    return (
        <section className='djsSection'>
            
            <span ref={myRef} className='flag'></span>

            <div className="djsSection__info">
                <span className={`djsSection__info-span ${visible ? 'visible' : ''}`}>Eventazzo</span>
                <h1 className={`djsSection__info-title ${visible ? 'visible' : ''}`}>Tu Fiesta! Tu Música!</h1>
                <p className={`djsSection__info-description ${visible ? 'visible' : ''}`}>Nos encargamos de diseñar una experiencia única donde la buena música, el sonido envolvente y la iluminación espectacular son los protagonistas. 
                    Creamos el ambiente ideal para que tú y tus invitados disfruten de una conexión especial en cada momento de tu gran día.</p>
            </div>

            <div className='djsSection__djs'>
                <ul className='djsSection__djs__list'>
                {djs.map((dj) => (
                    <li 
                    key={dj.id} 
                    className={`djsSection__djs__list__item ${visible ? 'visible' : ''}`}
                    onClick={() => navDj(dj.name.replace(/\s+/g, '-'))}
                    >
                        <img src={dj.img} alt={dj.name} className='djsSection__djs__list__item-img' />
                        <div className='djsSection__djs__list__item__img__info'>
                            <h2 className='djsSection__djs__list__item__info-title'>{dj.name}</h2>
                            <p className='djsSection__djs__list__item__info-description'>{dj.description}</p>
                        </div>
                    </li>
                ))}
                </ul>
            </div>

            <Playlists/>
            
        </section>
    )
}