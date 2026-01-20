import djs from '../../services/djs';
import { useParams, useNavigate } from 'react-router-dom';
import { useState, useEffect } from 'react';

export default function Gallery() {
    
    const [djActive, setDjActive] = useState();
    const { dj } = useParams();
    const Navigate = useNavigate();

    useEffect(() => {

        const name = dj.replace(/-/g, ' ')

        setDjActive(djs.find(d => d.name.toLocaleLowerCase() === name.toLowerCase()))

    }, [dj])

    function navHome() {
        Navigate('/');
    }

    if (!djActive) {
        return (
            <div className='dj404'>
                <p className='dj404__description'>El DJ no se ha encontrado en nuestra lista, vuelva a la página inicial y acceda desde allí.</p>
                <button className='dj404__button' onClick={navHome}>Volver</button>
            </div>
        ); 
    }

    return (
        <>
            <section className='djImgs'>
                <div className='djImgs__portrait'>
                    <img className='djImgs__portrait__img' src={djActive.img} alt={djActive.name} />
                </div>

                <div className='djImgs__gallery'>
                    {djActive.gallery.map(link => (
                        <img className="djImgs__gallery__item" src={link} alt={djActive.name} />
                    ))}
                </div>
            </section>
        </>
    );
}