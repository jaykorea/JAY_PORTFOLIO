import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";

import robotImg1 from "../assets/img/freeway.png";
import robotImg2 from "../assets/img/del_bot.png";
import robotImg3 from "../assets/img/serv_bot1.png";
import robotImg4 from "../assets/img/serv_bot2.png";
import robotImg5 from "../assets/img/jay.png";
import robotImg6 from "../assets/img/jay.png";

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
  
export const Projects = () => {

  const robot = [
    {
      title: "Robot Project1",
      thumbnail_description: "My 1st Robot Projecdt",
      thumbnail: robotImg1,
      imgUrl1: robotImg1,
      imgUrl2: robotImg1,
      imgUrl3: robotImg1,
      imgUrl4: robotImg1,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "Robot Project2",
      thumbnail_description: "My 2nd Robot Projecdt",
      thumbnail: robotImg2,
      imgUrl1: robotImg2,
      imgUrl2: robotImg2,
      imgUrl3: robotImg2,
      imgUrl4: robotImg2,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "Robot Project3",
      thumbnail_description: "My 3rd Robot Projecdt",
      thumbnail: robotImg3,
      imgUrl1: robotImg3,
      imgUrl2: robotImg3,
      imgUrl3: robotImg3,
      imgUrl4: robotImg3,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "Robot Project4",
      thumbnail_description: "My 4th Robot Projecdt",
      thumbnail: robotImg4,
      imgUrl1: robotImg4,
      imgUrl2: robotImg4,
      imgUrl3: robotImg4,
      imgUrl4: robotImg4,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "Robot Project5",
      thumbnail_description: "My 5th Robot Projecdt",
      thumbnail: robotImg5,
      imgUrl1: robotImg5,
      imgUrl2: robotImg5,
      imgUrl3: robotImg5,
      imgUrl4: robotImg5,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "Robot Project6",
      thumbnail_description: "My 6th Robot Projecdt",
      thumbnail: robotImg6,
      imgUrl1: robotImg6,
      imgUrl2: robotImg6,
      imgUrl3: robotImg6,
      imgUrl4: robotImg6,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
  ];

  const rnd = [
    {
      title: "R&D Project1",
      thumbnail_description: "My 1st R&D Project",
      thumbnail: projImg1,
      imgUrl1: projImg1,
      imgUrl2: projImg1,
      imgUrl3: projImg1,
      imgUrl4: projImg1,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "R&D Project2",
      thumbnail_description: "My 2nd R&D Project",
      thumbnail: projImg2,
      imgUrl1: projImg2,
      imgUrl2: projImg2,
      imgUrl3: projImg2,
      imgUrl4: projImg2,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "R&D Project3",
      thumbnail_description: "My 3rd R&D Project",
      thumbnail: projImg3,
      imgUrl1: projImg3,
      imgUrl2: projImg3,
      imgUrl3: projImg3,
      imgUrl4: projImg3,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "R&D Project4",
      thumbnail_description: "My 4th R&D Project",
      thumbnail: projImg4,
      imgUrl1: projImg4,
      imgUrl2: projImg4,
      imgUrl3: projImg4,
      imgUrl4: projImg4,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "R&D Project5",
      thumbnail_description: "My 5th R&D Project",
      thumbnail: projImg5,
      imgUrl1: projImg5,
      imgUrl2: projImg5,
      imgUrl3: projImg5,
      imgUrl4: projImg5,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
    {
      title: "R&D Project6",
      thumbnail_description: "My 6th R&D Project",
      thumbnail: projImg6,
      imgUrl1: projImg6,
      imgUrl2: projImg6,
      imgUrl3: projImg6,
      imgUrl4: projImg6,
      description1: "hello",
      description2: "world",
      description3: "cpp",
      description4: "python",
    },
  ];

  const iot = [
    {
      title: "IOT Project1",
      thumbnail_description: "My 1st IoT Project",
      thumbnail: projImg1,
      imgUrl1: projImg1,
      imgUrl2: projImg1,
      imgUrl3: projImg1,
      imgUrl4: projImg1,
      description1: "1st IoT description1",
      description2: "1st IoT description2",
      description3: "1st IoT description3",
      description4: "1st IoT description4",
    },
    {
      title: "IOT Project2",
      thumbnail_description: "My 2nd IoT Project",
      thumbnail: projImg2,
      imgUrl1: projImg2,
      imgUrl2: projImg2,
      imgUrl3: projImg2,
      imgUrl4: projImg2,
      description1: "2nd IoT description1",
      description2: "2nd IoT description2",
      description3: "2nd IoT description3",
      description4: "2nd IoT description4",
    },
    {
      title: "IOT Project3",
      thumbnail_description: "My 3rd IoT Project",
      thumbnail: projImg3,
      imgUrl1: projImg3,
      imgUrl2: projImg3,
      imgUrl3: projImg3,
      imgUrl4: projImg3,
      description1: "3rd IoT description1",
      description2: "3rd IoT description2",
      description3: "3rd IoT description3",
      description4: "3rd IoT description4",
    },
    {
      title: "IOT Project4",
      thumbnail_description: "My 4th IoT Project",
      thumbnail: projImg4,
      imgUrl1: projImg4,
      imgUrl2: projImg4,
      imgUrl3: projImg4,
      imgUrl4: projImg4,
      description1: "4th IoT description1",
      description2: "4th IoT description2",
      description3: "4th IoT description3",
      description4: "4th IoT description4",
    },
    {
      title: "IOT Project5",
      thumbnail_description: "My 5th IoT Project",
      thumbnail: projImg5,
      imgUrl1: projImg5,
      imgUrl2: projImg5,
      imgUrl3: projImg5,
      imgUrl4: projImg5,
      description1: "5th IoT description1",
      description2: "5th IoT description2",
      description3: "5th IoT description3",
      description4: "5th IoT description4",
    },
    {
      title: "IOT Project6",
      thumbnail_description: "My 6th IoT Project",
      thumbnail: projImg6,
      imgUrl1: projImg6,
      imgUrl2: projImg6,
      imgUrl3: projImg6,
      imgUrl4: projImg6,
      description1: "6th projcet 6th IoT description1",
      description2: "6th IoT description2",
      description3: "6th IoT description3",
      description4: "6th IoT description4",
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
                <p>I show you to all projects I have done so far categorized into 'Robot', 'R&D(related patent and published paaer)', and 'IoT' devices which I've developed.</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Robot</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">R&D</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">IoT</Nav.Link>
                    </Nav.Item>
                    {/* <Nav.Item>
                      <Nav.Link eventKey="fourth">Competition</Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          robot.map((project, index) => {
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          rnd.map((project, index) => {
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
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          iot.map((project, index) => {
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
                    <Tab.Pane eventKey="fourth">
                      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cumque quam, quod neque provident velit, rem explicabo excepturi id illo molestiae blanditiis, eligendi dicta officiis asperiores delectus quasi inventore debitis quo.</p>
                      <Row>
                        {
                          iot.map((project, index) => {
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
};
