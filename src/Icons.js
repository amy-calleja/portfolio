import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'

export default function Icons() {

    // when hovering, will return random color
    const dColors = [
    '#bd93f9',
    '#ff79c6',
    '#f8f8f2',
    '#50fa7b',
    '#8be9fd',
    '#f1fa8c',
    '#ffb86c',
    '#ff5555'
    ]
    const dracularColor = dColors[Math.floor(Math.random() * 15)]

    function changeColor(){
        return dracularColor
    }

    return(
    <div className="tech m-5 mx-3">
    <div className='comment'>// My Stack </div>
       <span>
          <FontAwesomeIcon  icon={faReact} className="icons" title='React.js'/>
          <FontAwesomeIcon  icon={faSquareJs} className="icons" title='JavaScript'/>
           <FontAwesomeIcon icon={faHtml5} className="icons" title='HTML5'/>
           <FontAwesomeIcon icon={faCss3Alt} className="icons" title='CSS3'/>
           <FontAwesomeIcon icon={faGithub} className="icons" title='Git / GitHub'/>
           <FontAwesomeIcon icon={faBootstrap} className="icons" title='Bootstrap'/>
           <FontAwesomeIcon icon={faNpm} className="icons" title='NPM and API'/>
       </span> 
   </div>
    );
}