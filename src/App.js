import 'bootstrap/dist/css/bootstrap.min.css'
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Section1 from './components/Section-1';
import Cards from './components/Cards'
import Footer from './components/Footer';


const App = ()=>{

    return (
        <>
            <Navbar/>
            <Hero/>
            <Section1/>
            <Cards/>
            <Footer/>
        </>
    )
};
export default App;