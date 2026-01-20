import Header from "../components/common/header"
import Footer from "../components/common/footer"

export default function Page404() {
    
    return (
        <>  
            <Header></Header>
            <div className="page404">
                <h1 className="page404__title">404</h1>
                <h2 className="page404__description">Lo sentimos!<br />no se ha encontrado la página.</h2>
            </div>
            <Footer></Footer>
        </>
    )
}