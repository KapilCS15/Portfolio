import React from "react";
import { Col, Row } from "react-bootstrap";
// import { CgCPlusPlus } from "react-icons/cg";
import {
  DiPython,
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
  DiBootstrap,
  DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiNextdotjs,
  SiRedux,
  SiPostgresql,
  SiCplusplus
} from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <DiPython/>
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>Python</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJavascript1 />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>JavaScript</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiHtml5/>
      <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>HTML5</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiCss3 />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>CSS3</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiReact />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>ReactJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <DiBootstrap />
      <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>Bootstrap</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>NextJS</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiFirebase />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>Firebase</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiRedux/>
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>Redux</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiPostgresql />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>SQL</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiCplusplus/>
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>C++</h1>
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
        <h1 className="display" style= {{ fontFamily:"poppins, cursive" ,fontSize: "25px"}}>Java</h1>
      </Col>
    </Row>
  );
}

export default Techstack;
