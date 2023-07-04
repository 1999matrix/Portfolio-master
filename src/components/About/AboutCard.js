import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Shashwat Dwivedi </span>
            from <span className="purple"> Kanpur, India.</span>
            <br /> I am a final year student pursuing bachelor's in Computer Science and Engineering from AKGEC,Ghaziabad.
            <br></br>
            <br></br>
           I'm an experienced Full Stack Developer proficient in AWS, React JS, Node JS, and Express JS, with a focus on API design and integration, database query optimization, and Competitive Programming.


            <br />
            <br></br>
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writing Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Shashwat</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
