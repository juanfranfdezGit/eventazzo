import Slider from "./slider";
import Logo from "../../../assets/images/logo/eventazzoBlanco.png";

export default function Hero() {

    return (
        <section className='hero'>
        
            <div className="hero__logo">
                <img src={Logo} alt="Eventazzo"/>
            </div>

            <div className='hero__circles'>
                <div className='hero__circles--ext'></div>
                <div className='hero__circles--mid'></div>
                <div className='hero__circles--int'></div>
            </div>

            <Slider />
        
        </section>
    )
}