import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section1 from './components/Section-1';
import Section2 from './components/Section2'
import Footer from './components/Footer';


const App = ()=>{

    return (
        <>
            <Navbar/>
            <Hero/>
            <Section1/>
            <Section2/>
            <Footer/>
        </>
    )
};
export default App;