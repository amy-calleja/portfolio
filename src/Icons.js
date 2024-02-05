import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'
import { useState } from 'react'
import { icon } from '@fortawesome/fontawesome-svg-core'

export default function Icons() {
    const [hover, setHover] = useState(false)

    // when hovering, will return random color
    const dColors = [
    '#bd93f9',
    '#ff79c6',
    '#50fa7b',
    '#8be9fd',
    '#f1fa8c',
    '#ffb86c',
    '#ff5555'
    ]
    const dracularColor = dColors[Math.floor(Math.random() * 7)]

const icons = [
    {
        "key": "0",
        "icon": faReact,
        "title": "React.js"
      },
      {
        "key": "1",
        "icon": faSquareJs,
        "title": "JavaScript"
      },
      {
        "key": "2",
        "icon": faHtml5,
        "title": "HTML5"
      },
      {
        "key": "3",
        "icon": faCss3Alt,
        "title": "CSS3"
      },
      {
        "key": "4",
        "icon": faGithub,
        "title": "Git / GitHub"
      },
      {
        "key": "5",
        "icon": faBootstrap,
        "title": "Bootstrap"
      },
      {
        "key": "6",
        "icon": faNpm,
        "title": "NPM and API"
      }
    ]

    return(
    <div className="tech m-5 mx-3">
    <div className='comment'>// My Stack </div>
       <span>
       { icons.map((icon) => {
        return(
            <span>
            <FontAwesomeIcon onMouseOver={()=>setHover(icon.key)} onMouseOut={()=>setHover(null)} style={hover === icon.key? {color: dracularColor} : null}  icon={icon.icon} className="icons" title={icon.title}/>
            </span>); }
       )} 
       </span> 
   </div>
    );
}