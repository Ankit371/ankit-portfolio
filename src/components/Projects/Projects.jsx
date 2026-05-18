import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../assets/Projects/leaf.png";
import emotion from "../../assets/Projects/emotion.png";
import editor from "../../assets/Projects/codeEditor.png";
import chatify from "../../assets/Projects/chatify.png";
import suicide from "../../assets/Projects/suicide.png";
import bitsOfCode from "../../assets/Projects/blog.png";
import quickchat from "../../assets/Projects/quickchat.png";

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
              imgPath={quickchat}
              isBlog={false}
              title="QuickChat"
              description="Real-time chat application built with React.js on the frontend and Node.js with Socket.io on the backend. Features include user authentication, real-time messaging, user online status, and a clean, responsive UI. Application is deployed on Vercel with full production support."
              ghLink="https://github.com/Ankit371/Chat_Application"
              demoLink="https://chat-application-psi-pink.vercel.app/login"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
