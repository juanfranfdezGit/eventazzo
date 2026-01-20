import { Routes, Route } from 'react-router-dom'; 
import Home from './views/home';
import Dj from './views/dj';
import Page404 from './views/page404';
import Contact from './views/contact';

function App() {

  return (
    <>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dj/:dj" element={<Dj />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<Page404 />} />
        </Routes>
    </>
  );
}

export default App;