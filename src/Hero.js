import React from "react";
import { Button, Col, Row, Container, Stack } from "react-bootstrap";
import Typewriter from 'typewriter-effect';

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
   typewriter.typeString(`<div class="title"><span class="pink smaller">( </span><span class="blue smaller">React.js Frontend Developer <span class="pink">)</span></span></div>`)   
   .start()
  }}
/>

    return(
    <Container className="mb-5">
    <Row  style={{padding: '100px 0 210px 0'}} >
        <Col className="d-flex justify-content-center">
        <div className="hero mb-5 mt-4 text-start">
         <span className='pink'>function <span className="green"> Welcome</span> () {'{'}</span>
               <div className="blue"><span className="pink"> return </span>{'('}</div>
               <div className="ms-3">{'<'}<span className="pink">div</span>{'>'}</div> 
               <div className='ms-4 mt-3'> hi👋 I'm</div> 
               <div ><span className="title-name">{'{'}{typerName}{'}'}</span></div>
               <div>{typerJob}</div>
                   <div className='ms-4'> {'</'}<span className="pink">div</span>{'>'}</div>
                   <div className='ms-3'><span className="blue">{')'}</span>;</div>
               <div className="pink" >{' }'}</div>
        </div> 
        </Col> 
    </Row>         
     <a href="#contact"><Button className="contactButton mb-5">Let's Chat() => </Button>  </a>
   </Container>
   );
}