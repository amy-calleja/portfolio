
import { Button, Col, Row, Image, Container, Stack } from "react-bootstrap";
import './Projects.css'
import WeatherProjJs from './weatherProjJs1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import WeatherApp from './weatherApp.jpg';
import DictionaryApp from './dictionaryApp.jpg';

export default function Projects() {
    return (
    <Container className="my-5">
    <div className="Projects" id='projects'>
        <Stack className="col-md-8 mx-auto">
      <div style={{fontStyle: 'italic', fontSize: '28px'}}  className="titles mb-4">{'<'}<span className="blue">Projects </span>{'/>'}</div>
        <p>A few examples of some personal projects, you may find more examples and repositories on my <a className='pink' target='_blank' href='https://github.com/amy-calleja/portfolio'>Github page</a>.</p>
       </Stack>
      <Row className="my-5">
      <Col xs={12}><h3><span className="pink">{'{'}</span> {''} Dictionary Search App - React.js <span className="pink">{'}'}</span></h3></Col>
        <Col xs={12} md={6} className="mb-4"><Image fluid rounded src={DictionaryApp}></Image></Col>
        <Col className="text-start">
            <p>A Dictionary Search Application built in React.js utilising API capabilities and concisely structured components.
                <div className="mt-3 mb-5">This app is specifically built using a responsive user interface with the help of the Bootstrap framework.</div>
                </p>
            <a target='_blank' href="https://react-dictionary-app123.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/react-dictionary-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>       
       </Row>

       <Row className="my-5">
       <Col xs={12}><h3><span className="pink">{'{'}</span> Desktop Weather App - React.js <span className="pink">{'}'}</span></h3></Col>
{/* display on xs and sm screens only */}
       <Col className="d-block d-md-none mb-4" xs={12} md={6}><Image fluid rounded src={WeatherApp} ></Image></Col>  
        <Col md={6} className='switch'>
            <p>A desktop Weather Application written in React.js with extensive API usage and npm package integration.
                <div className="mt-3 mb-5">Making use of reusable components and injecting packages to fully utilise React's capabilities.</div>
                </p>
            <a target='_blank' href="https://react-weather-app922.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/react-weather-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>   
{/* display on md and bigger screens only */}  
        <Col className="d-none d-md-block" xs={12} md={6}><Image fluid rounded src={WeatherApp} ></Image></Col>   
       </Row>

       <Row className="my-5">
       <Col xs={12}><h3><span className="pink">{'{'}</span> Desktop Weather App - Vanilla JS <span className="pink">{'}'}</span></h3></Col>
        <Col xs={12} md={6} className="mb-4"><Image  fluid rounded src={WeatherProjJs} ></Image></Col>
        <Col className="text-start">
            <p>One of my first projects, a desktop Weather Application written in Vanilla Javascript which changes background depending on the current time of day. 
                <div className="mt-3 mb-5">This app can take your current location and also display the weekly forecast of the location.</div>
                </p>
            <a target='_blank' href="https://js-vanilla-weather.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/vanilla-weather-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>       
       </Row>
       </div>
       </Container>
    );
}