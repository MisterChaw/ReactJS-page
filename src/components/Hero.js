import './Styles/Hero.css'
import Carousel from 'react-bootstrap/Carousel';
import Image1 from './images/Carousel1.jpg';
import Image2 from './images/carousel2.jpg';
import Image3 from './images/carousel3.jpg';

function Hero() {
  return (
    <Carousel className='carouselBody'>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImages"
          src={Image1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h5 className='title'>Fried Veges</h5>
          <p className='text'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImages"
          src={Image2}
          alt="Second slide"
        />
        <Carousel.Caption>
          <h5 className='title'>Fresh fruit juice</h5>
          <p className='text'>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100 carouselImages"
          src={Image3}
          alt="Third slide"
        />
        <Carousel.Caption>
          <h5 className='title'>Happy fruit desserts</h5>
          <p className='text'>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

    // ------------End of carousel
  );
}


export default Hero;
