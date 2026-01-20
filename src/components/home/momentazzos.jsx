import ReactPlayer from 'react-player'

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
                playing 
                loop 
                muted

                />

            </div>

            <div className="momentazzos__img">
                <img src="/assets/images/momentazzos.jpg" className="momentazzos__img-back" alt='momentazzos background' />

                <div className="momentazzos__img__card">
                    <img src="/assets/images/momentazzos.jpg" className="momentazzos__img__card-img" alt='momentazzos'/>
                    <img src="/assets/images/logo/eventazzoGris.png" className="momentazzos__img__card-logo" alt='eventazzo'/>
                    <h2 className="momentazzos__img__card-title">Momentazzos</h2>
                </div>

            </div>
          
        </section>
    )
}
