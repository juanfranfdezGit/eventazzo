import { useEffect, useState } from "react";
import img01 from "../../../assets/images/gallery01.jpg";
import img02 from "../../../assets/images/gallery02.jpg";
import img03 from "../../../assets/images/gallery03.jpg";
import img04 from "../../../assets/images/gallery04.jpg";

export default function Slider() {

    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % 4);
        }, 9000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 50) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }
        };
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <div className={`slider ${isScrolled ? 'scrolled' : ''}`}>
            <img className={currentIndex === 0 ? 'slider__active' : ''} src={img01} alt="foto boda"></img>
            <img className={currentIndex === 1 ? 'slider__active' : ''} src={img02} alt="foto boda"></img>
            <img className={currentIndex === 2 ? 'slider__active' : ''} src={img03} alt="foto boda"></img>
            <img className={currentIndex === 3 ? 'slider__active' : ''} src={img04} alt="foto boda"></img>
        </div>
    )
}