import { Col, Container, Row } from "react-bootstrap";
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGitAlt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect';
import Icons from "./Icons"

export default function() {
    return(
        <div id='about' className="About mt-5">
        <Row className="m-4 px-5">
        <div className="m-3" >
            <div className="titles mb-4">{'<'}<span className="blue">About Me </span>{'/>'}</div>
            As a <span className="pink">Front End Developer</span>, I focus on <span className="blue highlighted">React.js</span> and <span className="yellow  highlighted">JavaScript</span> to create dynamic and user-friendly web applications. With 2+ years of experience, I enjoy applying my skills and creativity to solve complex problems and deliver high-quality solutions ✨
          </div> 
          <div className="mt-3 mb-1">My background in graphic design and creative direction naturally helps me to design responsive and attractive UIs that match the brand identity and vision of each project.
          </div>
        </Row>
        <Icons />
        </div>
    );
}