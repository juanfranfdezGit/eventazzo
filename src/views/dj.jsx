import Header from "./components/common/header"
import Footer from "./components/common/footer"
import DjInfo from "./components/dj/djInfo"
import Gallery from "./components/dj/gallery"

import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Dj() {

    const ScrollToTop = () => {
        const location = useLocation();
      
        useEffect(() => {
          window.scrollTo(0, 0);
        }, [location]);
      
        return null;
    };
    
    return (
        <>
            <ScrollToTop />
            <Header />
            <DjInfo />
            <Gallery />
            <Footer />
        </>
    )
}