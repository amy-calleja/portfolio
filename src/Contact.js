import Card from 'react-bootstrap/Card';
import './Contact.css'; 
import { CardFooter, CardSubtitle, Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-regular-svg-icons';

export default function Contact() {
    return (
        <div className='Contact'>
       
        <Card id='contact' className='pt-5'>
        <Card.Body>
          <Card.Title style={{fontSize: '17px'}}>Interested to know more?
            <div className='mt-2'><span className='green'>Let's Chat<span className='pink'>{'()'} </span></span>=>
            </div>
            </Card.Title>
          <Card.Link target='_blank' href="https://www.linkedin.com/in/amycalleja/"><FontAwesomeIcon icon={faLinkedin} className="icons contact blue " /></Card.Link>
          <Card.Link target='_blank' href="mailto:amy.calleja@live.com"><FontAwesomeIcon icon={faEnvelope} className="icons contact pink" /></Card.Link>
          <Card.Link target='_blank' href="https://github.com/amy-calleja"><FontAwesomeIcon icon={faGithub} className="icons contact yellow" /></Card.Link>
       <CardSubtitle className='comment m-1' style={{fontStyle: 'italic'}}>This portfolio design was inspired by my first used color-coding theme <span><a className='purple' target='_blank' href='https://draculatheme.com/'>Dracular</a></span></CardSubtitle>
       <CardSubtitle className='comment' style={{fontStyle: 'italic'}}>Opensource code written by Amy Calleja, available on <span><a className='pink' target='_blank' href='https://github.com/amy-calleja/portfolio'>Github</a></span></CardSubtitle>
       </Card.Body>
      </Card>
     
      </div>
    );
}