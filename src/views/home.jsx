import Hero from "../components/home/hero";
import Momentazzos from "../components/home/momentazzos";
import DjSection from "../components/home/djSection";
import Header from "../components/common/header";
import Footer from "../components/common/footer";

export default function Home() {
    return (
        <>
            <Header />
            <Hero />
            <DjSection />
            <Momentazzos />
            <Footer />
        </>
    )
}