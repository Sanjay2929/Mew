import './App.css';
import '../src/App2.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/Navbar';
import BackToTop from './components/BackToTop';
import Hero from './components/Hero';
import Appointment from './components/Appointment';
import Services from './components/Services';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Footer from './components/Footer';
import Decodblog from './components/Decodblog';
import OurGroomers from './components/OurGroomers';

function App() {
  return (
    <div className='bg_body'>
      <Navbar />
      <Hero />  
      <Appointment />
      <Services />
      <OurGroomers/>
      <Decodblog/>
      <Footer/>
      <BackToTop />
    </div>
  );
}

export default App;
