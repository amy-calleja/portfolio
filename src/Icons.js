import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'

export default function Icons() {
    return(
    <div className="tech m-5 mx-3">
    <div className='comment'>// My Stack </div>
       <span>
          <FontAwesomeIcon icon={faReact} className="icons" />
          <FontAwesomeIcon icon={faSquareJs} className="icons" />
           <FontAwesomeIcon icon={faHtml5} className="icons" />
           <FontAwesomeIcon icon={faCss3Alt} className="icons" />
           <FontAwesomeIcon icon={faGithub} className="icons" />
           <FontAwesomeIcon icon={faBootstrap} className="icons" />
           <FontAwesomeIcon icon={faNpm} className="icons" />
       </span> 
   </div>
    );
}