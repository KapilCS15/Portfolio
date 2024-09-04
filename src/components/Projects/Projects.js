import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import netflix from "../../Assets/Projects/Netflix.png";
import surway from "../../Assets/Projects/surway.png";
import movie from "../../Assets/Projects/movie.png";
import fitnesslab from "../../Assets/Projects/fitness-lab.jpg"
import countryinfo from "../../Assets/Projects/countryinfo.jpg"
import restaurant from "../../Assets/Projects/restaurant.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={movie}
              isBlog={false}
              title="The CinePhile"
              description="A web application that leverages the TMDB (The Movie Database) API to help users effortlessly discover trending movies. The platform will offer an immersive experience by showcasing movie ratings, overviews, and trailers. The goal was to provide a user-friendly interface where movie enthusiasts can explore and stay updated on the latest popular films."
              ghLink="https://github.com/KapilCS15/movie-app"
              demoLink="moviexyz-app.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitnesslab}
              isBlog={false}
              title="Fitness Lab"
              description=" Fitness Lab is a responsive and user-friendly web application built using ReactJS and styled with Tailwind CSS. The platform aims to offer users, exercise routines and reps tracking tools, according to their fitness level. Users will recieve tailored workout plans, such as strength power, growth hypertrophy, or cardiovascular endurance."
              ghLink="https://github.com/KapilCS15/fitness-lab/tree/master"
              demoLink="https://fitness-labs.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={restaurant}
              isBlog={false}
              title="Cuisine Culture"
              description="A Modern, responsive (UI) for a restaurant's front-end using React.js and Tailwind CSS. The application will offer users the ability to browse the restaurant's menu and enjoy a seamless user experience enhanced with animations. The goal was to create an intuitive, visually appealing, and simple interface that works well on various devices."
              ghLink="https://github.com/KapilCS15/My-Restaurant"
              demoLink="cuisine-culture.netlify.app"
            />
          </Col>

          <Col md={4} className="project-card">
          <ProjectCard
              imgPath={surway}
              isBlog={false}
              title="Surway+"
              description="A Web Application that facilitates user participation in online polls. It focuses on providing an intuitive and user-friendly interface where users can easily take part in polls. Additionally, the application features real-time graphical representations of poll results, enhancing user engagement and providing immediate feedback."
              ghLink="https://github.com/KapilCS15/surway-polls"             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={countryinfo}
              isBlog={false}
              title="Country Information"
              description="This is a JavaScript-based web application that provides detailed information about countries around the world. The application offers users the ability to search for and explore data on different countries, including key statistics, geographical information, and cultural insights. The goal of the application is to delivers comprehensive country data in an accessible format."
              ghLink="https://github.com/KapilCS15/country-info"
              demoLink="https://nations-info.netlify.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={netflix}
              isBlog={false}
              title="Netflix lookalike"
              description="This is just a Netflix streaming service starting page replica, based on mainly HTML and CSS. The goal is to create a visually accurate replica of the Netflix interface, showcasing a clean and modern design. "
              ghLink="https://github.com/KapilCS15/netflix-clone"
              demoLink="https://net-clones.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
