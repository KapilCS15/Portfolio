import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Kapil Saxena </span>
            from <span className="purple"> Kota, India.</span>
            <b> </b>I am currently employed as a Front End Developer at Lascaux Designs.
            I have completed my BTech. in Computer Science at <span className="purple">Modi Institute of Technology, Kota.</span>
            <br />
            <br />
            My journey in tech is fueled by a blend of creativity and analytical thinking, ensuring each line of code not only looks good but also performs optimally. With a solid foundation in both front-end development and data structures and algorithms, I approach every project with a problem-solving mindset.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Cooking
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Reject common sense to make the impossible possible."{" "}
          </p>
          <footer className="blockquote-footer">Anonymous</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
