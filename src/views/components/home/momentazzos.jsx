import ReactPlayer from 'react-player'
import Momentazzo from '../../../assets/images/momentazzos.jpg';
import EventazzoGrayLogo from '../../../assets/images/logo/eventazzoGris.png';

export default function Momentazzos() {

    return (
        <section className='momentazzos'>

            <div className="momentazzos__video">

                <ReactPlayer
                className='video'
                url= 'https://wdrtphmw3xwpqilh.public.blob.vercel-storage.com/enventazzo-WGact9LCg37CgJDuUPm1EdAp54dCYJ.MP4'
                width='100%'
                height='100%'
                controls={false}
                loop 
                muted

                />

            </div>

            <div className="momentazzos__img">
                <img src={Momentazzo} className="momentazzos__img-back" alt='momentazzos background' />

                <div className="momentazzos__img__card">
                    <img src={Momentazzo} className="momentazzos__img__card-img" alt='momentazzos'/>
                    <img src={EventazzoGrayLogo} className="momentazzos__img__card-logo" alt='eventazzo'/>
                    <h2 className="momentazzos__img__card-title">Momentazzos</h2>
                </div>

            </div>
          
        </section>
    )
}
