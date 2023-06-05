import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 4
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 3
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
    <section className="skill" id="skills">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>About Skills</h2>
                        <p>I have learned different programming languages ​​so far and as far as my skills are concerned<br></br></p>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C++</h5>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>C</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Python</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Matlab C</h5>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>Shell programming</h5>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Javascript</h5>
                            </div>
                        </Carousel>
                    </div>
                    <div className="skill-bx2 wow zoomIn">
                        <h3>I have various experience and knowledge of Software tools in the fields of ROS based development libraries<br></br></h3>
                        <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ROS</h5>
                                <h6>Developing AMR to communicate various sensor data, driving logic and algorithm on middleware platform</h6>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>ROS2</h5>
                                <h6>To Interface parent compatible software package(navigation stack) to ROS melodic version</h6>
                            </div>
                            <div className="item">
                                <img src={meter1} alt="Image" />
                                <h5>GAZEBO</h5>
                                <h6>To validate GPP, LPP algorithm and fine-tune of related parameters</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>openCV</h5>
                                <h6>Process RGBD stream data to get segmented object 3D pose with Yolo algorithm</h6>
                            </div>
                            <div className="item">
                                <img src={meter3} alt="Image" />
                                <h5>QT5, PyQT5</h5>
                                <h6>Interface with robot local server to access to parameter database, actuate or manipulate robot</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Stm32 Cube IDE, ESP-IDF, Arduino</h5>
                                <h6>Process complimentary,kalman filtered proximity sensor, joystick data to SBC and for the switch interrupt handling to control robot</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Free-RTOS</h5>
                                <h6>Assuring real time operation of parallel processing to process fimware algorithm</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>Docker, git</h5>
                                <h6>Keep independence of robot server and for managing version & deploy</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>nodejs</h5>
                                <h6>Robot UI backend development</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>django</h5>
                                <h6>UI backend development</h6>
                            </div>
                            <div className="item">
                                <img src={meter2} alt="Image" />
                                <h5>CATIA, CAD</h5>
                                <h6>Robot mechanical design & production</h6>
                            </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
        {/* <img className="background-image-left" src={colorSharp} alt="Image"></img> */}
    </section>
  )
}
