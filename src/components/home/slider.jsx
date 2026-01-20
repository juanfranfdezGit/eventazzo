import { useEffect, useState } from "react";

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
            <img className={currentIndex === 0 ? 'slider__active' : ''} src='/assets/images/gallery01.jpg' alt="foto boda"></img>
            <img className={currentIndex === 1 ? 'slider__active' : ''} src='/assets/images/gallery02.jpg' alt="foto boda"></img>
            <img className={currentIndex === 2 ? 'slider__active' : ''} src='/assets/images/gallery03.jpg' alt="foto boda"></img>
            <img className={currentIndex === 3 ? 'slider__active' : ''} src='/assets/images/gallery04.jpg' alt="foto boda"></img>
        </div>
    )
}