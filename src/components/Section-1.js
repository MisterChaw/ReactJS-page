import './Styles/Section-1.css'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Image1 from './images/section1-img1.jpg'
import Image2 from './images/section1-image-2.jpg'
import Image3 from './images/section1-image3.jpg'
import Image4 from './images/section1-image4.jpg'

function Section1() {
  return (
    <>
    <div className='section1'>
        <Card className='cardBox' style={{ width: '18rem' }}>
            <Card.Img className='images' variant="top" src={Image1}/>
            <Card.Body className='cardBody'>
                <Card.Title><h3>Ice cream n' Cake</h3></Card.Title>
                <Card.Text>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit dolor sit amet...</p>
                </Card.Text>
                <Button variant="primary">Read more </Button>
            </Card.Body>
        </Card>

        <Card className='cardBox' style={{ width: '18rem' }}>
            <Card.Img className='images' variant="top" src={Image2} />
            <Card.Body className='cardBody'>
                <Card.Title><h3>Cupcake</h3></Card.Title>
                <Card.Text>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit dolor sit amet...</p>
                </Card.Text>
                <Button variant="primary">Read more </Button>
            </Card.Body>
        </Card>

        <Card className='cardBox' style={{ width: '18rem' }}>
            <Card.Img className='images' variant="top" src={Image3} />
            <Card.Body className='cardBody'>
                <Card.Title><h3>Mango pie</h3></Card.Title>
                <Card.Text>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit dolor sit amet...</p>
                </Card.Text>
                <Button variant="primary">Read more </Button>
            </Card.Body>
        </Card>

        <Card className='cardBox' style={{ width: '18rem' }}>
            <Card.Img className='images' variant="top" src={Image4} />
            <Card.Body className='cardBody'>
                <Card.Title><h3>Sweet cream</h3></Card.Title>
                <Card.Text >
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit dolor sit amet...</p>
                </Card.Text>
                <Button variant="primary">Read more </Button>
            </Card.Body>
        </Card>
    </div>
    </>
    
  );
}

export default Section1;