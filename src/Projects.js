
import { Button, Col, Row, Image } from "react-bootstrap";
import './Projects.css'
import WeatherProjJs from './weatherProjJs1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub} from '@fortawesome/free-brands-svg-icons';
import WeatherApp from './weatherApp.jpg';
import DictionaryApp from './dictionaryApp.jpg';

export default function Projects() {
    return (
       <div className="Projects p-5" id='projects'>
       <div style={{fontStyle: 'italic'}}  className="titles">{'<'}<span className="blue">Projects </span>{'/>'}</div>
        <div style={{maxWidth: '850px'}}> 
        <p className="m-4 px-2">A few examples of some personal projects, you may find more examples and repositories on my <a className='pink' target='_blank' href='https://github.com/amy-calleja/portfolio'>Github page</a>}.</p>
     
      <Row className="mb-2 py-3">
        <div><h3><span className="pink">{'{'}</span> {''} Dictionary Search App - React.js <span className="pink">{'}'}</span></h3></div>
        <Col><Image rounded src={DictionaryApp} style={{maxWidth: '380px', marginBottom: 40}}></Image></Col>
        <Col style={{textAlign: 'start'}}>
            <p>A Dictionary Search Application built in React.js utilising API capabilities and concisely structured components.
                <div className="mt-3 mb-5">This app is specifically built using a responsive user interface with the help of the Bootstrap framework.</div>
                </p>
            <a target='_blank' href="https://react-weather-app922.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/react-weather-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>       
       </Row>

       <Row className="mb-2 py-3">
        <div> <h3><span className="pink">{'{'}</span> Desktop Weather App - React.js <span className="pink">{'}'}</span></h3></div>
        <Col style={{textAlign: 'end'}}>
            <p>A desktop Weather Application written in React.js with extensive API usage and npm package integration.
                <div className="mt-3 mb-5">Making use of reusable components and injecting packages to fully utilise React's capabilities.</div>
                </p>
            <a target='_blank' href="https://react-weather-app922.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/react-weather-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>     
        <Col><Image rounded src={WeatherApp} style={{maxHeight: '630px'}}></Image></Col>   
       </Row>

       <Row className="mb-2 py-3">
        <div><h3><span className="pink">{'{'}</span> Desktop Weather App - Vanilla JS <span className="pink">{'}'}</span></h3></div>
        <Col><Image rounded src={WeatherProjJs} style={{maxWidth: '380px', marginBottom: 40}}></Image></Col>
        <Col style={{textAlign: 'start'}}>
            <p>One of my first projects, a desktop Weather Application written in Vanilla Javascript which changes background depending on the current time of day. 
                <div className="mt-3 mb-5">This app can take your current location and also display the weekly forecast of the location.</div>
                </p>
            <a target='_blank' href="https://js-vanilla-weather.netlify.app/" rel="noreferrer"><Button> View Project()</Button></a>
            <p className="comment my-3"><a href="https://github.com/amy-calleja/vanilla-weather-app" target='_blank' rel="noreferrer" className="comment">// View Repository <FontAwesomeIcon icon={faGithub} className="icons git contact m-0 p-0" style={{fontSize: '25px'}}/></a></p>
        </Col>       
       </Row>
       </div>
       </div>
    );
}