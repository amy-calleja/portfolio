import { Row, Container, Stack } from "react-bootstrap";
import './About.css'
import Icons from "./Icons"

export default function About() {
    return(
    <Container className="mt-5 mb-5"> 
    <div id='about' className="About mt-5 mb-5">
        <Stack gap={2} className="col-md-8 mx-auto">
            <div className="titles mb-4">{'<'}<span className="blue">About Me </span>{'/>'}</div>
            <div>As a <span className="pink">Front End Developer</span>, I focus on <span className="blue highlighted">React.js</span> and <span className="yellow  highlighted">JavaScript</span> to create dynamic and user-friendly web applications. With 2+ years of experience, I enjoy applying my skills and creativity to solve complex problems and deliver high-quality solutions ✨
            </div> 
            <br />My background in graphic design and creative direction naturally helps me to design responsive and attractive UIs that match the brand identity and vision of each project.
        <Icons />
    </Stack>
    </div>
    </Container>
    );
}