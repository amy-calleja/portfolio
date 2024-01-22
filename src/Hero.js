import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faReact, faSquareJs, faHtml5, faCss3Alt, faGitAlt, faGithub, faBootstrap, faNpm } from '@fortawesome/free-brands-svg-icons'
import Typewriter from 'typewriter-effect';
import Icons from "./Icons";

export default function Hero(){

const typerName = 
<Typewriter
  onInit={(typewriter) => {
    typewriter.typeString(`<span class="name"> Amy Calleja </span>`)  
    .start();
  }}
/>

const typerJob = 
<Typewriter
  onInit={(typewriter) => {
   typewriter.pauseFor(2500) 
   typewriter.typeString(`<div class="title"><span class="pink">( </span><span class="blue">React.js Frontend Developer <span class="pink">)</span></span></div>`)   
   .start()
  }}
/>

    return(
    <>
    <Row className="my-5">
        <Col>
        <div className="hero mb-5 mt-4">
         <span className='pink'>function <span className="green"> Welcome</span> () {'{'}</span>
               <div className="blue"><span className="pink"> return </span>{'('}</div>
               <div className="ms-3">{'<'}<span className="pink">div</span>{'>'}</div> 
               <div className='ms-4 mt-3'> hi👋 I'm</div> 
               <div className=" title-name"><span>{'{'}{typerName}{'}'}</span></div>
               <div>{typerJob}</div>
                   <div className='ms-4'> {'</'}<span className="pink">div</span>{'>'}</div>
                   <div className='ms-3'><span className="blue">{')'}</span>;</div>
               <div className="pink" >{' }'}</div>
        </div>  
        </Col>
    </Row>
            <div className="tech my-5">
                 <div className="icons hide">React.js</div>
                <span className="">
                 
                       <Icons name={faReact} />
                       <Icons name={faSquareJs} />
                    <FontAwesomeIcon icon={faHtml5} className="icons" />
                    <FontAwesomeIcon icon={faCss3Alt} className="icons" />
                    <FontAwesomeIcon icon={faGithub} className="icons" />
                    <FontAwesomeIcon icon={faBootstrap} className="icons" />
                    <FontAwesomeIcon icon={faNpm} className="icons" />
                </span> 
                <div></div>
            </div>
     
    </>
    );
}