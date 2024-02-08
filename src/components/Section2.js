import './Styles/Section2.css'
import Card from 'react-bootstrap/Card';
import Image1 from './images/Section2-1.jpg'
import Image2 from './images/Section2-2.jpg'

function Section2() {
  return (
    <>
    <div className='section2'>
        <Card className='section2Box' style={{width: 630}}>
            <Card.Img className='section2Images' variant="top" src={Image1}/>
            <Card.Body className='cardBody'>
                <Card.Title><h3>Feedbacks</h3></Card.Title>
                <Card.Text>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit...</p>
                </Card.Text>
            </Card.Body>
        </Card>

        <Card className='section2Box' style={{width: 630}}>
            <Card.Img className='section2Images' variant="top" src={Image2} />
            <Card.Body className='cardBody'>
                <Card.Title><h3>Branches</h3></Card.Title>
                <Card.Text>
                <p>Lorem ipsum dolor sit amet, consec tetur adipiscing elit...</p>
                </Card.Text>
            </Card.Body>
        </Card>
    </div>
    </>
    
  );
}

export default Section2;