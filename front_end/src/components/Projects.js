import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ReactPlayer from 'react-player/youtube';
import projImg1 from "../assets/img/forth project.jpg";
import projImg2 from "../assets/img/second work.jpg";
import projImg3 from "../assets/img/project1.jpg";
import projImg4 from "../assets/img/first work.jpg";
import projImg5 from "../assets/img/fifth work.jpg";
import projImg6 from "../assets/img/12345.jpg";

import robotImg1 from "../assets/img/freeway.png";
import motor_calculation_selection from "../assets/img/robot/motor_calculation_selection.png";
import computing_sensors from "../assets/img/robot/computing_sensors.png";
import mechanical_design from "../assets/img/robot/mechanical_design.png";
import sw_architecture from "../assets/img/robot/sw_architecture.png";
import obstacle_ground_detector from "../assets/img/robot/obstacle_ground_detector.png";
import safety_zone from "../assets/img/robot/safety_zone.png";
import safety_controller_node from "../assets/img/robot/safety_controller_node.png";
import multiplexing from "../assets/img/robot/multiplexing.png";
import hmi from "../assets/img/robot/hmi.png";
import logic_controller from "../assets/img/robot/logic_controller.png"
import parsing_node from "../assets/img/robot/parsing_node.png"

import robotImg2 from "../assets/img/del_bot.png";


import robotImg3 from "../assets/img/serv_bot1.png";


import robotImg4 from "../assets/img/serv_bot2.png";


import robotImg5 from "../assets/img/jay.png";


import robotImg6 from "../assets/img/jay.png";


import demo_video from "../assets/video/drive_test.mp4";
import voxel_filter_video from "../assets/video/voxel_filter.mp4"
import localization_video from "../assets/video/localization_264.mp4"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
  
export const Projects = () => {

  const robot = [
    {
      title: "Development of Personal Autonomous Wheelchair",
      thumbnail_description: "Development of self-driving mobild robot for occupant sensitive intent recognition",
      thumbnail: robotImg1,
      //imgUrl1: robotImg1,
      //imgUrl2: robotImg1,
      imgUrl3: motor_calculation_selection,
      //imgUrl3_1:
      imgUrl3_2: computing_sensors,
      imgUrl3_3: mechanical_design,
      imgUrl4: sw_architecture,
      imgUrl4_1: obstacle_ground_detector,
      imgUrl4_2: safety_zone,
      imgUrl4_3: multiplexing,
      imgUrl4_4: hmi,
      imgUrl4_5: logic_controller,
      imgUrl4_6: parsing_node,
      //imgUrl5: robotImg1,
      //imgUrl6: robotImg1,
      //imgUrl7: robotImg1,
      //imgUrl8: robotImg1,
      //imgUrl9: robotImg1,
      //imgUrl10: robotImg1,
      //imgUrl11: robotImg1,
      //imgUrl12: robotImg1,
      description1_title: "Overview",
      description1: (
        <span>
        The inspiration behind this project stemmed from my passion for robotics and a desire to create a mobility solution that prioritizes both safety and personalization. I embarked on this endeavor to push the boundaries of autonomous navigation, integrating cutting-edge hardware and software technologies to enhance the overall user experience and make a positive impact on the lives of individuals with mobility challenges. Furthermore, I integrated the various driving logic with passensger intent recognition data processed with deeplearning network to operate HMI(Human Machine Interface) as well as satifying the safety function to keep the passensger safe from hazardous circumstances.
        </span>
      ),
      description2_title: "Demo Video",
      videoUrl1: demo_video,
      video1_description: (
        <span>[Demonstration of Route follow-up, obstacle avoidance, emergency stop]</span>
      ),
      description3_title: "Hardware",
      description3_sub_title: "⦁ Driving Unit",
      imgUrl3_description: "[Recommended stall torque and device selection]",
      description3: (
        <span>
          - These calculations provide insights into the torque requirements and characteristics of the motor needed to meet the specified maximum weight, wheel radius, wheel diameter, and maximum speed of the system. 
          <br/>
          - Following the calculation of the required performance, I configured the driving unit with dual 'MDR200' and 'MD400T' of 'MD Robot' corporate.<br />
          <br />
          Reviewing the motor and motor driver specification, I set the safety margin of the stall torque to satisfy to drive normally loading max weight to 100kg setting the gear ratio to 30:1.<br /><br />
        </span>
      ),
      description3_sub_title1: "⦁ Computing & Sensors",
      imgUrl3_2_description: "[Hardware and Sensor Configuration]",
      description3_1: (
        <span>
          The hardware and sensor configuration for the self-driving mobile robot platform includes the following components:<br />
          <br />
          <span className="number-section">1. Double Depth Camera (RealSense D455 Model)</span> 
          - The robot is equipped with a pair of RealSense D455 cameras. 
          <br/>
          - These depth cameras provide 3D object detection capabilities and are used for detecting AR markers for localization.
          <br/>
          - The cameras capture depth information, enabling the robot to perceive the environment in three dimensions.<br />
          <br />
          <span className="number-section">2. MCU (Microcontroller Unit)</span> - The robot's MCU is responsible for communication with the robot server using ROSserial.
          <br/>
          - It processes control of LED(WS2812 chip), Joystick, Ultra sonar and interrupt handling(emergency button, control button).
          <br/>
          - It interfaces with the server through UART TTL to USB communication, ensuring reliable data exchange and control between the robot and the server.<br />
          <span dangerouslySetInnerHTML={{ __html: "- You can check out the firmware code <a href='https://github.com/jaykorea/freeway_firmware_rev00' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
          <br />
          <span className="number-section">3. 2D LiDAR</span>
          - LakiBeam LiDAR: It is utilized for calculating the time to collision (TTC) and transmitting relevant data to the safety control node. It plays a crucial role in assessing the proximity and potential collision risks with detected objects in real-time.<br />
          - RPLiDAR S2: It is employed for the AMCL (Adaptive Monte Carlo Localization) algorithm. It provides essential environmental perception data, aiding in the robot's localization and mapping capabilities.<br />
          <br />
          The combination of these sensors, cameras, and the MCU enables the robot to gather comprehensive environmental information, ranging from depth perception and object detection to localization and mapping. This rich sensor suite empowers the robot's autonomy and decision-making processes, ensuring efficient and safe navigation in complex environments.
          <br />
          <br />
        </span>
      ),
      description3_sub_title2: "⦁ Mechanical Designs",
      imgUrl3_3_description: "[Design layout using CATIA & 3DMax]",
      description3_2: (
        <span>
        - It basically designed with 3D design tool CATIA. All the sensor coordinations are based on the axis(Y) of the motor axis(i.e. wheel radius length from the ground).<br />
        - The mechanical design of the robot is centered around its front motor-driven configuration, which provides efficient and precise control over its movement. The robot utilizes a front-wheel drive system, also known as a differential drive system, which allows for smooth and agile maneuverability.<br />

        - The front motor serves as the main propulsion source, driving the robot forward and backward. This design choice enables precise control over the robot's speed and direction, allowing it to navigate various environments with ease. The differential drive system utilizes independent control of the two drive wheels, enabling the robot to perform intricate turning maneuvers by varying the speeds of the wheels.<br />
              
        - To ensure optimal performance and power supply, a 24V output AGM battery is incorporated into the robot's design. The AGM battery technology offers several advantages, including enhanced motor performance, reliable power output, and a longer lifespan. This battery selection enables the robot to operate efficiently while maintaining a stable power supply for the motor and other components.<br />
              
        - Additionally, the robot features two casters at the back of the robot body. These casters provide stability and support, allowing the robot to maintain balance and maneuver smoothly, even when navigating uneven surfaces or making sharp turns.<br />
              
        - Overall, the mechanical design of the robot, with its front motor-driven configuration, differential drive system, and AGM battery, ensures optimal performance, precise control, and reliable power supply. This design enables the robot to effectively carry out its intended functions while maintaining stability and maneuverability in various environments.<br /><br />
        </span>
      ),
      description4_title: "Software",
      description4_sub_title: "⦁ Architecture",
      imgUrl4_description: "[Robot operating Software block]",
      description4: (
        <span>
        <span className="number-section">1. EKF node</span>
        - Sensor fusion to get robust robot position in local frame<br/>
        - Fused Wheel odom(linear velocity x,y - from motor encoder) with IMU process data(angular velocity z - from realsense D455)<br/>
        - To estimate the robot position in local frame, I increase the orientation covariance of IMU data to ignore yaw angle drift when the robot is stationary<br/>
        <br/>
        <span className="number-section">2. Robot navigtaion node</span>
        <span dangerouslySetInnerHTML={{ __html: "I configured it with <a href='https://github.com/magazino/move_base_flex' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>move_base_flex </a>ros navigation library. You can check out further parameter configuration  <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_move_base_flex.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br/>
        <span className="number-section2">* Costmap generation node</span>
        - To process 3D object based costmap, I've downsampled the voxel size(0.05m) and segmented as obstacle and ground to reduce the computational resource.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={obstacle_ground_detector} style={{ width: '100%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Process 3D object data based on RGBD image]</span_sub>
        {/* <video className="project-video" controls playing onLoadedMetadata={(e) => {e.target.playbackRate = 1.25; }}>
          <source src={voxel_filter_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <ReactPlayer
            className="project-video"
            url='https://youtu.be/FV2hLd3USC8'
            controls
            playing
            playbackRate={1.5}
          />
        <span_sub>[Filterd voxel and generated costmap]</span_sub>
        <span className="number-section2">* Trajectory Planning node</span>
        - GPP : I configure the global planner with dlux_global_planner based on A* algorithm and adjust path caching method to reduce computational resource.
        <span dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/planners.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here.</a>" }} />
        - LPP: I configure the local planner with teb_local_planner based on time elastic band algorithm and modified checking feasibility part to prevent the robot oscillating on specific circumstance(path-blocked).
        <span dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/controllers.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as modified code on my <a href='https://github.com/jaykorea/teb_local_planner_feasibility_check/blob/main/src/teb_local_planner_ros.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github.</a>" }} /> 
        <br/>
        <span className="number-section">3. SLAM node</span>
        I configured the SLAM node with 'Cartographer' to generate occupancy map, 'map server' to serve the generated map and AMCL for the robot to localize in frame.
        <br/><br/>
        <span className="number-section2">* Map server node</span>
        - Basically, the map is generated by Cartographer with scan-matching algorithm.
        <br/>
        - Map server node serves the map into 2 divided map that is 'map' and 'map_raw'.
        <br/>
        - 'map' is the modified map containing blocked areas for the robot to prevent invading the restricted area.
        <br/>
        - 'map_raw' is the raw format of the generated map, which serves the AMCL node.
        <br/>
        <br/>
        <span className="number-section2">* AMCL node</span>
        - For robot to localize in map frame(regarding to odom frame), I implemented AMCL algorithm.
        <br/>
        - To enhace the performance of localization and reduce the computational resource, operated it with CUDA for accelerating the computation time and increase the maximum particles parameter.
        <br/>
        <span dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_amcl.launch' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as CUDA supported AMCL package on this github <a href='https://github.com/atinfinity/amcl' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>repo.</a>" }} /> 
        {/* <video className="project-video" controls autoPlay onLoadedMetadata={(e) => {e.target.playbackRate = 1.75; }}>
          <source src={localization_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <ReactPlayer
            className="project-video"
            url='https://youtu.be/Jyp0jCpGtwY'
            controls
            playing
            playbackRate={1.5}
          />
        <span_sub>[Demonstration of Localization based on CUDA support AMCL]</span_sub>
        <br/>
        <span className="number-section">4. Vehicle Motion Controller node</span>
        On this node, It multiplexes the command velocity generated by LPP, Teleop, Joystick and emergency stop velocity generated by safety node.
        <br/>
        <br/>
        <span className="number-section2">* Safety controller node</span>
        - It generate command velocity to stop or slow down the robot depending on each zone.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={safety_zone} style={{ width: '60%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Detecting zone of safety controller node]</span_sub>
        - As the robot faces sudden objects or any other objects, It slows down or stops till the front obstacle is gone.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={safety_controller_node} style={{ width: '90%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing block of safety controller node]</span_sub>
        - Depending on each parameter, it can be configured of the detecting zone and sensitivity of detecting the objects.
        <span dangerouslySetInnerHTML={{ __html: "- You can find the detailed parameter configuration on my <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_ttc/config/fw_ttc_params.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github</a> as well as calculating <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair/blob/main/fw_ttc/src/lidar_ttc.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>ttc node code</a> and <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair/blob/main/fw_safety/src/safety_controller.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>safety node code</a>here." }} /> 
        <br/>
        <span className="number-section2">* Command velocity multiplexing node</span>
        - Based on the generated multiple command velocity, the mux node deals with the multiple command velocity.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={multiplexing} style={{ width: '95%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing node block of mux node & transmiting topics]</span_sub>
        - Command velocity generated by each 'Teleop', 'Joystick', 'LPP', 'Safety' server is smoothed by velocity smoother node and transmit to mux node.
        <br/>
        - Based on the priority of each commands, it outputs to the Low-level Controller node.
        <span dangerouslySetInnerHTML={{ __html: "- You can find the detailed parameter configuration for the mux node on my <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/yocs_cmd_vel_mux/param/example.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github.</a>" }} /> 
        <br/>
        <span className="number-section2">* Occupant sensitive intent recognition parsing node</span>
        - Main goal of developing this robot is to implement interface of robot with occupant.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hmi} style={{ width: '85%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Controll decision based on occupant's recognition and voice]</span_sub>
        - The parsing node access to LPP dynamic parameter server depending on the parsed data(face recognition & voice).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logic_controller} style={{ width: '100%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Protocol definition (based on AT command through rs-232) & logic control examples]</span_sub>
        - I have defined the base communication protocol to easily parse the data.
        <br/>
        - Once the data is parsed and filtered, the logic controller outputs the control adjustment parameters.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={parsing_node} style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing blocks of transmiting control adjustment parameters to LPP dynamic parameter server]</span_sub>
        - To reduce the noise of the parsed data, it is filtered by MAF(Moving Average Filter) and it stores on the array to 'Hash' flag.
        <br/>
        <span dangerouslySetInnerHTML={{ __html: "- You can check out the code on my <a href='https://github.com/jaykorea/protocol_tester_parser/tree/modified' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github repo</a>here." }} /> 
    
        </span>
      ),
      description10_title: "Further Information",
      description10: (
        <span dangerouslySetInnerHTML={{ __html: "For more details and the ROS setup to perform the robot server, please refer to my <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a> link." }} />
      ),
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
