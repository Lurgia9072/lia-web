import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/video/web-coder.mp4";
import video2 from "../assets/video/web-coder-9.mp4";
import video3 from "../assets/video/web-coder-2.mp4";
import video4 from "../assets/video/web-coder-3.mp4";
import video5 from "../assets/video/web-coder-4.mp4";
import video6 from "../assets/video/web-coder-5.mp4";
import video7 from "../assets/video/web-coder-7.mp4";
import video8 from "../assets/video/web-coder-8.mp4";
import video9 from "../assets/video/web-coder-6.mp4";

import projImg2 from "../assets/img/skills/web-design-1.jpg";
import projImg3 from "../assets/img/skills/web-design-10.jpg";
import projImg4 from "../assets/img/skills/web-design-11.jpg";
import projImg5 from "../assets/img/skills/web-design-2.jpg";
import projImg6 from "../assets/img/skills/web-design-3.jpg";
import projImg7 from "../assets/img/skills/web-design-4.jpg";
import projImg8 from "../assets/img/skills/web-design-5.jpg";
import projImg9 from "../assets/img/skills/web-design-6.jpg";
import projImg10 from "../assets/img/skills/web-design-7.jpg";
import projImg11 from "../assets/img/skills/web-design-8.jpg";
import projImg12 from "../assets/img/skills/web-design-9.jpg";
import projImg13 from "../assets/img/skills/web-design.jpg";
import projImg14 from "../assets/img/skills/web-design-12.jpg";
import projImg15 from "../assets/img/skills/web-design-13.jpg";
import projImg16 from "../assets/img/skills/web-design-14.jpg";
import projImg17 from "../assets/img/skills/web-design-15.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

import videoM from "../assets/video/mobile.mp4";
import videoM1 from "../assets/video/mobile1.mp4";
import videoM2 from "../assets/video/mobile2.mp4";
import videoM3 from "../assets/video/mobile3.mp4";
import videoM4 from "../assets/video/mobile4.mp4";
import videoM5 from "../assets/video/mobile5.mp4";
import videoM6 from "../assets/video/mobile6.mp4";
import videoM7 from "../assets/video/mobile7.mp4";
import videoM8 from "../assets/video/mobile8.mp4";
import videoM9 from "../assets/video/mobile9.mp4";
import videoM10 from "../assets/video/mobile10.mp4";

import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video3,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video8,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: video9,
    },
  ];

  const projectsDesign = [
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg2,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg13,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg3,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg6,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg7,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg8,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg9,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg10,
    },

    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg11,
    },
    
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg13,
    },

   
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg16,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg15,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg17,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg5,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg4,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg12,
    },
    {
      title: "Business Startup",
      description: "Design UX/UI",
      imgUrl: projImg14,
    },
  
  ];

  const projectsMobile = [
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM2,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM1,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM3,
    }
    ,
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM4,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM5,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM6,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM7,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM8,
    }
    ,{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM9,
    }
    ,{
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM10,
    },
    {
      title: "Business Startup",
      description: "Design & Development",
      imgUrl: videoM,
    },
  ];
  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p></p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Coder</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Design</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Mobile</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <Row>
                      {
                          projectsDesign.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <Row>
                      {
                          projectsMobile.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}
