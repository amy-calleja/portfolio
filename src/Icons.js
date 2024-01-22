import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGitAlt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'


export default function Icons() {
    return(
        <div className="tech mb-5 mx-4">
       <span className="">
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