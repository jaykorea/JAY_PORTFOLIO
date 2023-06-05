import { Container, Row, Col, Tab, Nav} from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import ReactPlayer from 'react-player/youtube';
import { useInView } from 'react-intersection-observer';
//import projImg1 from "../assets/img/forth project.jpg";
//import projImg2 from "../assets/img/second work.jpg";
//import projImg3 from "../assets/img/project1.jpg";
//import projImg4 from "../assets/img/first work.jpg";
//import projImg5 from "../assets/img/fifth work.jpg";
//import projImg6 from "../assets/img/12345.jpg";

//import under_revision from "../assets/img/under_revision.png";
import tbd from "../assets/img/tbd.png";

import robotImg1 from "../assets/img/robot/robot1/freeway.png";
import motor_calculation_selection from "../assets/img/robot/robot1/motor_calculation_selection.png";
import computing_sensors from "../assets/img/robot/robot1/computing_sensors.png";
import mechanical_design from "../assets/img/robot/robot1/mechanical_design.png";
import sw_architecture from "../assets/img/robot/robot1/sw_architecture.png";
import obstacle_ground_detector from "../assets/img/robot/robot1/obstacle_ground_detector.png";
import safety_zone from "../assets/img/robot/robot1/safety_zone.png";
import safety_controller_node from "../assets/img/robot/robot1/safety_controller_node.png";
import multiplexing from "../assets/img/robot/robot1/multiplexing.png";
import hmi from "../assets/img/robot/robot1/hmi.png";
import logic_controller from "../assets/img/robot/robot1/logic_controller.png"
import parsing_node from "../assets/img/robot/robot1/parsing_node.png"
import simulation_setup from "../assets/img/robot/robot1/simulation_setup.png"
import graph_frame from "../assets/img/robot/robot1/graph_frame.png"

import robotImg2 from "../assets/img/robot/robot2/del_bot.png";
import hw_block from "../assets/img/robot/robot2/hw_block.png";
import sw_block from "../assets/img/robot/robot2/sw_block.png";
import sw_lib_block from "../assets/img/robot/robot2/sw_lib_block.png";
import joynode from "../assets/img/robot/robot2/joynode.png";
import joystick_module from "../assets/img/robot/robot2/joystick_module.png";
import del_chassis from "../assets/img/robot/robot2/del_chassis.png";
import del_mechanical_design from "../assets/img/robot/robot2/del_mechanical_design.png";
import ekf_node from "../assets/img/robot/robot2/ekf_node.png";
import obstacle_layer from "../assets/img/robot/robot2/obstacle_layer.png";
import inflation_layer from "../assets/img/robot/robot2/inflation_layer.png";
import container_block from "../assets/img/robot/robot2/container.png"
import network_block from "../assets/img/robot/robot2/network.png"
import ui_block from "../assets/img/robot/robot2/ui.png";
import slam_front_back_end from "../assets/img/robot/robot2/slam_front_back_end.png";
import constructed_3dmap from "../assets/img/robot/robot2/constructed.png";
import loop_closure_robot2 from "../assets/img/robot/robot2/loop_closure.png";
import feature_matching from "../assets/img/robot/robot2/feature_matching.png";

import robotImg3 from "../assets/img/robot/robot3/serv_bot1.png";

import robotImg4 from "../assets/img/robot/robot3/serv_bot2.png";

import robotImg5 from "../assets/img/jay.png";

import robotImg6 from "../assets/img/jay.png";

import rndImg1 from "../assets/img/rnd/rnd1/brake_algo.png";
import sys_arch from "../assets/img/rnd/rnd1/sys_arch.png";
import l515_spec from "../assets/img/rnd/rnd1/l515_spec.png";
import tss from "../assets/img/rnd/rnd1/t_s_s.png";
import pid_block from "../assets/img/rnd/rnd1/pid_block.png";
import opencr from "../assets/img/rnd/rnd1/opencr.png";
import vehicle_spec from "../assets/img/rnd/rnd1/vehicle_spec.png";
import vehicle_catia from "../assets/img/rnd/rnd1/vehicle_catia.png";
import hydra from "../assets/img/rnd/rnd1/hydra.png";
import differential from "../assets/img/rnd/rnd1/differential.png";
import motor from "../assets/img/rnd/rnd1/motor.png";
import model_spec from "../assets/img/rnd/rnd1/model_spec.png";
import model_spec2 from "../assets/img/rnd/rnd1/model_spec2.png";
import v1 from "../assets/img/rnd/rnd1/v1.png";
import v2 from "../assets/img/rnd/rnd1/v2.png";
import tiny from "../assets/img/rnd/rnd1/tiny.png";
import yolo_process from "../assets/img/rnd/rnd1/yolo_process.png";
import yolo_layer from "../assets/img/rnd/rnd1/yolo_layer.png";
import bbox from "../assets/img/rnd/rnd1/bbox.png";
import bbox2 from "../assets/img/rnd/rnd1/bbox2.png";
import bbox3 from "../assets/img/rnd/rnd1/bbox3.png";
import bbox4 from "../assets/img/rnd/rnd1/bbox4.png";
import bbox5 from "../assets/img/rnd/rnd1/bbox5.png";
import bbox6 from "../assets/img/rnd/rnd1/bbox6.png";
import bbox7 from "../assets/img/rnd/rnd1/bbox7.png";
import bbox8 from "../assets/img/rnd/rnd1/bbox8.png";
import bbox9 from "../assets/img/rnd/rnd1/bbox9.png";
import iou from "../assets/img/rnd/rnd1/iou.png";
import brake_algo from "../assets/img/rnd/rnd1/brake_algo.png";
import check_brake from "../assets/img/rnd/rnd1/check_brake.png";
import s1 from "../assets/img/rnd/rnd1/s1.png";
import s2 from "../assets/img/rnd/rnd1/s2.png";
import s3 from "../assets/img/rnd/rnd1/s3.png";
import s4 from "../assets/img/rnd/rnd1/s4.png";
import s5 from "../assets/img/rnd/rnd1/s5.png";


// import demo_video from "../assets/video/drive_test.mp4";
// import voxel_filter_video from "../assets/video/voxel_filter.mp4"
// import localization_video from "../assets/video/localization_264.mp4"

import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

const VideoComponent_robot1_demo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
        className="project-video"
        url="https://youtu.be/lDV1-r4ewqA"
        controls
        playing={inView}
        playbackRate={1.25}
      />
    </div>
  );
};

const VideoComponent_robot1_voxel = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
      className="project-video"
      url='https://youtu.be/FV2hLd3USC8'
      controls
      playing={inView}
      playbackRate={1.5}
    />
    </div>
  );
};

const VideoComponent_robot1_localization = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
        <ReactPlayer
        className="project-video"
        url='https://youtu.be/Jyp0jCpGtwY'
        controls
        playing={inView}
        playbackRate={1.5}
      />
    </div>
  );
};

const VideoComponent_robot1_parsing_node_simulation = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
        <ReactPlayer
        className="project-video"
        url='https://youtu.be/o-gC5amo6ek'
        controls
        playing={inView}
        playbackRate={1.5}
      />
    </div>
  );
};

const VideoComponent_robot2_demo = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
        className="project-video"
        url="https://youtu.be/kcrjhZdo3pw"
        controls
        playing={inView}
        playbackRate={1.25}
      />
    </div>
  );
};

const VideoComponent_robot2_loopclosure = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
      className="project-video"
      url='https://www.youtube.com/watch?v=joV7VCvGrKM&ab_channel=matlabbe'
      controls
      playing={inView}
      playbackRate={1.5}
    />
    </div>
  );
};

const VideoComponent_robot2_mapping = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
      className="project-video"
      url='https://youtu.be/u96hQY8U92w'
      controls
      playing={inView}
      playbackRate={1.0}
    />
    </div>
  );
};

const VideoComponent_robot2_localization = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
        className="project-video"
        url="https://youtu.be/j2zn8xuXdxg"
        controls
        playing={inView}
        playbackRate={1.25}
      />
    </div>
  );
};

const VideoComponent_robot2_voxel = () => {
  const [ref, inView] = useInView({ triggerOnce: true });

  return (
    <div ref={ref}>
      <ReactPlayer
      className="project-video"
      url='https://youtu.be/7Dxf5wSCRF8'
      controls
      playing={inView}
      playbackRate={1.5}
    />
    </div>
  );
};

export const Projects = () => {

  const title = "Development of Personal Autonomous Wheelchair";

  const robot = [
    {
      title: "Development of Personal Autonomous Wheelchair",
      thumbnail_title: "Personal Autonomous Wheelchair",
      thumbnail_description: "Development of self-driving mobile robot for occupant sensitive intent recognition",
      thumbnail: robotImg1,

      main_body: (
      <span>
        <h3>Overview</h3>
        <br/>
        The inspiration behind this project stemmed from my passion for robotics and a desire to create a mobility solution that prioritizes both safety and personalization. I embarked on this endeavor to push the boundaries of autonomous navigation, integrating cutting-edge hardware and software technologies to enhance the overall user experience and make a positive impact on the lives of individuals with mobility challenges. Furthermore, I integrated the various driving logic with passensger intent recognition data processed with deeplearning network to operate HMI(Human Machine Interface) as well as satifying the safety function to keep the passensger safe from hazardous circumstances.
        <br/>
        <h3>Demo Video</h3>
        <VideoComponent_robot1_demo/>
        <span_sub>[Demonstration of Route follow-up, obstacle avoidance, emergency stop]</span_sub>
        <h3>Hardware</h3>
        <h4>⦁ Driving Unit</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={motor_calculation_selection} alt={title} style={{ width: '95%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Recommended stall torque and device selection]</span_sub>
        <br/>
        - These calculations provide insights into the torque requirements and characteristics of the motor needed to meet the specified maximum weight, wheel radius, wheel diameter, and maximum speed of the system.
        <br/>
        - Following the calculation of the required performance, I configured the driving unit with dual 'MDR200' and 'MD400T' of 'MD Robot' corporate.
        <br/>
        <br/>
        Reviewing the motor and motor driver specification, I set the safety margin of the stall torque to satisfy to drive normally loading max weight to 100kg setting the gear ratio to 30:1.
        <br />
        <br />
        <br/>
        <h4>⦁ Computing & Sensors</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={computing_sensors} alt={title} style={{ width: '65%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Hardware and Sensor Configuration]</span_sub>
        The hardware and sensor configuration for the self-driving mobile robot platform includes the following components:<br />
        <br />
        <span_number-section>1. Double Depth Camera (RealSense D455 Model)</span_number-section>
        - The robot is equipped with a pair of RealSense D455 cameras.
        <br/>
        - These depth cameras provide 3D object detection capabilities and are used for detecting AR markers for localization.
        <br/>
        - The cameras capture depth information, enabling the robot to perceive the environment in three dimensions.<br />
        <br />
        <span_number-section>2. MCU (Microcontroller Unit)</span_number-section> - The robot's MCU is responsible for communication with the robot server using ROSserial.
        <br/>
        - It processes control of LED(WS2812 chip), Joystick, Ultra sonar and interrupt handling(emergency button, control button).
        <br/>
        - It interfaces with the server through UART TTL to USB communication, ensuring reliable data exchange and control between the robot and the server.<br />
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the firmware code <a href='https://github.com/jaykorea/freeway_firmware_rev00' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br />
        <span_number-section>3. 2D LiDAR</span_number-section>
        - LakiBeam LiDAR: It is utilized for calculating the time to collision (TTC) and transmitting relevant data to the safety control node. It plays a crucial role in assessing the proximity and potential collision risks with detected objects in real-time.<br />
        - RPLiDAR S2: It is employed for the AMCL (Adaptive Monte Carlo Localization) algorithm. It provides essential environmental perception data, aiding in the robot's localization and mapping capabilities.<br />
        <br />
        The combination of these sensors, cameras, and the MCU enables the robot to gather comprehensive environmental information, ranging from depth perception and object detection to localization and mapping. This rich sensor suite empowers the robot's autonomy and decision-making processes, ensuring efficient and safe navigation in complex environments.
        <br />
        <br />
        <h4>⦁ Mechanical Designs</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={mechanical_design} alt={title} style={{ width: '90%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Design layout using CATIA & 3DMax]</span_sub>
        <br/>
        - It basically designed with 3D design tool CATIA. All the sensor coordinations are based on the axis(Y) of the motor axis(i.e. wheel radius length from the ground).
        <br />
        - The mechanical design of the robot is centered around its front motor-driven configuration, which provides efficient and precise control over its movement. The robot utilizes a front-wheel drive system, also known as a differential drive system, which allows for smooth and agile maneuverability.
        <br />
        - The front motor serves as the main propulsion source, driving the robot forward and backward. This design choice enables precise control over the robot's speed and direction, allowing it to navigate various environments with ease. The differential drive system utilizes independent control of the two drive wheels, enabling the robot to perform intricate turning maneuvers by varying the speeds of the wheels.
        <br />
        - To ensure optimal performance and power supply, a 24V output AGM battery is incorporated into the robot's design. The AGM battery technology offers several advantages, including enhanced motor performance, reliable power output, and a longer lifespan. This battery selection enables the robot to operate efficiently while maintaining a stable power supply for the motor and other components.
        <br />
        - Additionally, the robot features two casters at the back of the robot body. These casters provide stability and support, allowing the robot to maintain balance and maneuver smoothly, even when navigating uneven surfaces or making sharp turns.
        <br />
        - Overall, the mechanical design of the robot, with its front motor-driven configuration, differential drive system, and AGM battery, ensures optimal performance, precise control, and reliable power supply. This design enables the robot to effectively carry out its intended functions while maintaining stability and maneuverability in various environments.
        <br />
        <br/>
        <h3>Software</h3>
        <h4>⦁ Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={sw_architecture} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot operating Software block]</span_sub>
        <span_number-section>1. EKF node</span_number-section>
        - Sensor fusion to get robust robot position in local frame<br/>
        - Fused Wheel odom(linear velocity x,y - from motor encoder) with IMU process data(angular velocity z - from realsense D455)<br/>
        - To estimate the robot position in local frame, I increase the orientation covariance of IMU data to ignore yaw angle drift when the robot is stationary<br/>
        <br/>
        <span_number-section>2. Robot navigtaion node</span_number-section>
        <span_html dangerouslySetInnerHTML={{ __html: "I configured it with <a href='https://github.com/magazino/move_base_flex' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>move_base_flex </a>ros navigation library. You can check out further parameter configuration  <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_move_base_flex.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br/>
        <span_number-section2>* Costmap generation node</span_number-section2>
        - To process 3D object based costmap, I've downsampled the voxel size(0.05m) and segmented as obstacle and ground to reduce the computational resource.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={obstacle_ground_detector} alt={title} style={{ width: '100%', padding: '0px', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processed 3D object data based on RGBD image]</span_sub>
        {/* <video className="project-video" controls playing onLoadedMetadata={(e) => {e.target.playbackRate = 1.25; }}>
          <source src={voxel_filter_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <VideoComponent_robot1_voxel/>
        <span_sub>[Filterd voxel and generated costmap]</span_sub>
        <span_number-section2>* Trajectory Planning node</span_number-section2>
        - GPP : I configure the global planner with dlux_global_planner based on A* algorithm and adjust path caching method to reduce computational resource.
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/planners.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here.</a>" }} />
        - LPP: I configure the local planner with teb_local_planner based on time elastic band algorithm and modified checking feasibility part to prevent the robot oscillating on specific circumstance(path-blocked).
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/controllers.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as modified code on my <a href='https://github.com/jaykorea/teb_local_planner_feasibility_check/blob/main/src/teb_local_planner_ros.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github.</a>" }} />
        <br/>
        <span_number-section>3. SLAM node</span_number-section>
        I configured the SLAM node with 'Cartographer' to generate occupancy map, 'map server' to serve the generated map and AMCL for the robot to localize in frame.
        <br/><br/>
        <span_number-section2>* Map server node</span_number-section2>
        - Basically, the map is generated by Cartographer with scan-matching algorithm.
        <br/>
        - Map server node serves the map into 2 divided map that is 'map' and 'map_raw'.
        <br/>
        - 'map' is the modified map containing blocked areas for the robot to prevent invading the restricted area.
        <br/>
        - 'map_raw' is the raw format of the generated map, which serves the AMCL node.
        <br/>
        <br/>
        <span_number-section2>* AMCL node</span_number-section2>
        - For robot to localize in map frame(regarding to odom frame), I implemented AMCL algorithm.
        <br/>
        - To enhace the performance of localization and reduce the computational resource, operated it with CUDA for accelerating the computation time and increase the maximum particles parameter.
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_amcl.launch' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as CUDA supported AMCL package on this github <a href='https://github.com/atinfinity/amcl' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>repo.</a>" }} />
        {/* <video className="project-video" controls autoPlay onLoadedMetadata={(e) => {e.target.playbackRate = 1.75; }}>
          <source src={localization_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <VideoComponent_robot1_localization/>
        <span_sub>[Demonstration of Localization based on CUDA support AMCL]</span_sub>
        <br/>
        <span_number-section>4. Vehicle Motion Controller node</span_number-section>
        On this node, It multiplexes the command velocity generated by LPP, Teleop, Joystick and emergency stop velocity generated by safety node.
        <br/>
        <br/>
        <span_number-section2>* Safety controller node</span_number-section2>
        - It generate command velocity to stop or slow down the robot depending on each zone.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={safety_zone} alt={title} style={{ width: '50%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Detecting zone of safety controller node]</span_sub>
        - As the robot faces sudden objects or any other objects, It slows down or stops till the front obstacle is gone.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={safety_controller_node} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing block of safety controller node]</span_sub>
        - Depending on each parameter, it can be configured of the detecting zone and sensitivity of detecting the objects.
        <span_html dangerouslySetInnerHTML={{ __html: "- You can find the detailed parameter configuration on my <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_ttc/config/fw_ttc_params.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github</a> as well as calculating <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair/blob/main/fw_ttc/src/lidar_ttc.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>ttc node code</a> and <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair/blob/main/fw_safety/src/safety_controller.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>safety node code</a>here." }} />
        <br/>
        <span_number-section2>* Command velocity multiplexing node</span_number-section2>
        - Based on the generated multiple command velocity, the mux node deals with the multiple command velocity.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={multiplexing} alt={title} style={{ width: '95%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing node block of mux node & transmiting topics]</span_sub>
        - Command velocity generated by each 'Teleop', 'Joystick', 'LPP', 'Safety' server is smoothed by velocity smoother node and transmit to mux node.
        <br/>
        - Based on the priority of each commands, it outputs to the Low-level Controller node.
        <span_html dangerouslySetInnerHTML={{ __html: "- You can find the detailed parameter configuration for the mux node on my <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/yocs_cmd_vel_mux/param/example.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github.</a>" }} />
        <br/>
        <span_number-section2>* Occupant sensitive intent recognition parsing node</span_number-section2>
        - Main goal of developing this robot is to implement interface of robot with occupant.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hmi} alt={title} style={{ width: '85%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Controll decision based on occupant's recognition and voice]</span_sub>
        - The parsing node access to LPP dynamic parameter server depending on the parsed data(face recognition & voice).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={logic_controller} alt={title} style={{ width: '100%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Protocol definition (based on AT command through rs-232) & logic control examples]</span_sub>
        - I have defined the base communication protocol to easily parse the data.
        <br/>
        - Once the data is parsed and filtered, the logic controller outputs the control adjustment parameters.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={parsing_node} alt={title} style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing blocks of transmiting control adjustment parameters to LPP dynamic parameter server]</span_sub>
        - To reduce the noise of the parsed data, it is filtered by MAF(Moving Average Filter) and it stores on the array to 'Hash' flag.
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the code on my <a href='https://github.com/jaykorea/protocol_tester_parser/tree/modified' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github repo</a>here." }} />
        <br/>
        - I've tested on simulation environment
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={simulation_setup} alt={title} style={{ width: '70%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[H/W configuration for Simulation]</span_sub>
        - simply divided into 3 blocks
        <br/>
        - Data transmit through uart on ttl level(simple serial communication)
        <br/>
        - Data formatted as an array
        <br/>
        <br/>
        <VideoComponent_robot1_parsing_node_simulation/>
        <span_sub>[Simulation result based on hash flag]</span_sub>
        - Simulated data transmitted regarding the 5 specific scenario to satisfy 'hash 1 ~ hash5' trigger circumstances
        <br/>
        - I temporally set hash 4,5 trigger as stop signal
        <br/>
        - Once the hash4 and 5 triggered, robot pauses
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the simulated data code on my <a href='https://github.com/jaykorea/protocol_tester_parser/blob/modified/mega_serialtester/mega_serialtester.ino' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github repo</a>here." }} />
        <h4>⦁ Graph & Frame Definition</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={graph_frame} alt={title} style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing node graph & Defined frames]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the <a href='https://drive.google.com/file/d/1uROfNVnNOVrmJCJn0TngLey5Hp-1X5b6/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>ros node graph</a>and <a href='https://drive.google.com/file/d/1seBZkhrJmri-2nrsSmzuH_diErlss1Dj/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>robot frames</a> by clicking the links." }} />
        <br/>
        <h3>Further Information</h3>
        <span_html dangerouslySetInnerHTML={{ __html: "- For more details and the ROS setup to perform the robot server, please refer to my <a href='https://github.com/jaykorea/fw_rev_04_for_wheelchair' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a> link." }} />
      </span>
      )
    },

// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************
// development of autonomous wheelchair **************************************************************


    {
      title: "Development of Delivery Robot for General-purpose Environment",
      thumbnail_title: "Autonomous Delivery Robot",
      thumbnail_description: "Development of delivery robot that can be run on both in & outdoor environment",
      thumbnail: robotImg2,

      main_body: (
        <span>
        <h3>Overview</h3>
        <br/>
        The development of a delivery robot for indoor and outdoor environments was a challenging and rewarding project. The main focus was on creating a robot that could navigate autonomously and efficiently deliver items in various environments. The development of this delivery robot demonstrates my expertise in robotics, autonomous navigation, and system integration. It showcases my ability to tackle complex challenges and deliver innovative solutions in the field of robotics and automation.
        <br/>
        <h3>Demo Video</h3>
        <VideoComponent_robot2_demo/>
        <span_sub>[Demonstration of Route follow-up, obstacle avoidance on Visual-SLAM]</span_sub>
        <h3>Hardware</h3>
        The hardware of the delivery robot was meticulously designed to ensure optimal performance. The mechanical design was carefully crafted to allow the robot to navigate various terrains and environments.
        <br/>
        The robot was equipped with a range of sensors and modules, each serving a specific function to enhance the robot's capabilities. These included distance sensors for obstacle detection and other modules for various tasks.
        <br/>
        <h4>⦁ Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hw_block} alt={title} style={{ width: '75%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Hardware block diagram]</span_sub>
        <br/>
        - The driving unit of the delivery robot was designed to provide the necessary propulsion and control for its movement. The specific details of the driving unit, such as the type of motor and torque calculations, may vary based on the requirements of the robot and its payload capacity. However, it is essential to select motors with sufficient power and torque to meet the demands of the robot's weight and maneuverability.
        <br/>
        <br/>
        Reviewing the motor and motor driver specification, I set the safety margin of the stall torque to satisfy to drive normally loading max weight to 100kg.
        <br />
        <br />
        <br/>
        <span_number-section>1. Depth Camera (RealSense D455)</span_number-section>
        - The robot is equipped with a pair of RealSense D455 cameras.
        <br/>
        - These cameras were strategically positioned to provide a wide field of view, approximately 180 degrees.
        <br/>
        - This wide field of view allowed the robot to detect more feature points, which significantly improved the performance of the RTAB-Map RGBD matching
        <br/>
        - The dual-camera setup ensured that the robot could effectively navigate and localize itself in a wide range of environments, making it highly versatile and efficient.<br />
        <br />
        <span_number-section>2. MCU (Microcontroller Unit)</span_number-section> - The robot's MCU is responsible for communication with the robot server using ROSserial.
        <br/>
        - It processes control of LED(WS2812 chip), Joystick, Ultra sonar and interrupt handling(emergency button, control button).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={joystick_module} alt={title} style={{ width: '45%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[MCU connected modules]</span_sub>
        - Joystick: Output voltage due to variable resistance of joystick to 12 bits of data(0~4095)
        <br/>
        - E-Stop Switch: Control Relay status, '/cmd_vel/emer' using external interrupt
        <br/>
        - Sonar Sensor: Data received from two sensors using I2C(Inter-Integrated Circuit) communication. I2C consists of a line SDA for data communication and a line SCL for timing synchronization.
        <br/>
        - Relay: E-Stop Switch On -> generate magnetic field to cut off the motor driver power
        <br/>
        - CP2102: Data between MCU and intel NUC is exchanged through UART communication
        <br/>
        <br/>
        - It interfaces with the server through UART TTL to USB communication, ensuring reliable data exchange and control between the robot and the server.<br />
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the firmware code <a href='https://github.com/jaykorea/freeway_firmware_rev00' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br />
        <span_number-section>3. 2D LiDAR(RPLiDARS2)</span_number-section>
        - This sensor was used to generate a 2D projection map, which aided the RTAB-Map in image registration.
        - The 2D Lidar used the Iterative Closest Point (ICP) algorithm to align the 2D map with the 3D point cloud generated by the RTAB-Map, improving the accuracy of the map and the robot's localization.
        <br />
        <br />
        This careful and strategic hardware configuration played a crucial role in the successful development of the delivery robot, demonstrating my skills in hardware design and system integration in the field of robotics.
        <br />
        <br />
        <h4>⦁ Mechanical Designs</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={del_mechanical_design} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot 3D design using CATIA]</span_sub>
        <br/>
        - It basically designed with 3D design tool CATIA. All the sensor coordinations are based on the axis(Y) of the motor axis(i.e. wheel radius length from the ground).
        <br />
        - The delivery robot is designed with a front-wheel drive configuration, which provides efficient and precise control over its movement. This design choice allows the robot to navigate various environments with ease. The front motor serves as the main propulsion source, driving the robot forward and backward. By independently controlling the two drive wheels, the robot can perform intricate turning maneuvers by varying the speeds of the wheels.
        <br />
        - The front motor serves as the main propulsion source, driving the robot forward and backward. This design choice enables precise control over the robot's speed and direction, allowing it to navigate various environments with ease. The differential drive system utilizes independent control of the two drive wheels, enabling the robot to perform intricate turning maneuvers by varying the speeds of the wheels.
        <br />
        - To ensure stability and maneuverability, the robot features two casters located at the back of the robot body. These casters provide support and allow the robot to maintain balance, even when navigating uneven surfaces or making sharp turns. The combination of the front-wheel drive and rear casters enables the robot to move smoothly and efficiently in different environments.
        <br />
        - In terms of sensor integration, the delivery robot is equipped with a 2D LiDAR sensor. This sensor is strategically positioned at the bottom of the robot body to provide a comprehensive view of the surroundings. By capturing laser scans and detecting obstacles, the 2D LiDAR enhances the robot's perception capabilities, enabling it to navigate safely and avoid collisions.
        <br />
        - The delivery robot also incorporates a camera bracket that holds dual cameras. These cameras are installed at a 90-degree angle to each other, allowing for a wide field of view. This setup enhances the robot's visual perception, enabling it to capture depth information and detect objects with greater accuracy. The combination of the dual cameras and the 2D LiDAR sensor provides the robot with a robust perception system, essential for successful navigation and mapping in various environments.
        <br/>
        - Overall, the mechanical design of the robot, with its front motor-driven configuration, differential drive system, and AGM battery, ensures optimal performance, precise control, and reliable power supply. This design enables the robot to effectively carry out its intended functions while maintaining stability and maneuverability in various environments.
        <br/>
        <br/>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={del_chassis} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot chassis design using CAD]</span_sub>
        - In addition to the hardware configuration, the delivery robot incorporates a meticulously designed chassis created using 2D CAD software.
        <br/>
        - The use of 2D CAD allows for precise and accurate modeling of the robot's chassis, ensuring compatibility with the laser-cutting machine.
        <br/>
        <br/>
        <h3>Software</h3>
        <h4>⦁ Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={sw_block} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot operating Software block]</span_sub>
        <span_number-section>1. EKF node</span_number-section>
        - The EKF node is a crucial part of the software configuration, responsible for sensor fusion to achieve a robust robot position in the local frame.
        <br/>
        - The EKF node is configured based on the robot_localization package in ROS, which is a collection of state estimation nodes for robots moving in 3D space. It provides an implementation of a nonlinear state estimator, which is used in this project.
        <br/>
        - It fuses data from wheel odometry, IMU, and visual odometry.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ekf_node} alt={title} style={{ width: '85%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Input data needed for sensor fusion]</span_sub>
        <span_number-section2>The inputs to the EKF node are</span_number-section2>
        <span_number-section2>i. Wheel Odometry (vx, vy, vyaw)</span_number-section2>
        - These represent the linear velocities in the x and y directions and the angular velocity around the yaw axis, respectively. These values are derived from the motor encoder.
        <br/>
        <span_number-section2>ii. IMU (vyaw)</span_number-section2>
        - The angular velocity around the yaw axis, derived from the Realsense D455.
        <br/>
        - To ignore yaw angle drift when the robot is stationary, the orientation covariance of IMU data is increased.
        <br/>
        <span_number-section2>iii. Visual Odometry (x, y, z, roll, pitch, yaw)</span_number-section2>
        - These values are obtained from RTAB-Map, which uses GFTT and BRIEF to calculate odometry based on feature matching.
        <br/>
        <br/>
        The EKF node fuses these inputs to estimate the robot's position in the local frame.
        <br/>
        It provides continuous estimation, beginning to estimate the vehicle’s state as soon as it receives a single measurement. If there is a missing in the sensor data (i.e., a long period in which no data is received), the filter will continue to estimate the robot’s state via an internal motion model.
        <br/>
        <br/>
        <VideoComponent_robot2_localization/>
        <span_sub>[Robot Localization with robust estimated pose]</span_sub>
        - This configuration of the EKF node demonstrates a sophisticated understanding of sensor fusion and state estimation in robotics, showcasing the ability to integrate and utilize various data sources for robust and accurate robot localization.
        <br/>

       <span_html dangerouslySetInnerHTML={{ __html: "- You can check out ekf node parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_cam/launch/launch_d455_ekf_wheel_imu_jay.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a>." }} />
        <br/>
        <span_number-section>2. Robot navigtaion node</span_number-section>
        <span_html dangerouslySetInnerHTML={{ __html: "I configured it with <a href='https://github.com/magazino/move_base_flex' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>move_base_flex </a>ros navigation library. You can check out further parameter configuration  <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_move_base_flex.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br/>
        <span_number-section2>* Firmware node</span_number-section2>
        Firmware node transmit robot control data through UART including emergency stop and mode selection packet.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={joynode} alt={title} style={{ width: '60%', padding: '0px', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[MCU node block to com with Navigation node side]</span_sub>
        <br/>
        - Run Service server (Req : am_mode, Res : result)
        <br/>
        - Publish am_status2 msg[store service result value], Publish am_status2 msg[store service result value]
        <br/>
        - Bind 'freeway/diagnostics' msg to 'cmd_vel' msg
        <br/>
        - Publish freeway/cancel msg, Publish zero velocity when obstacle is near around the robot
        <br/>
        - Subscribe 'am_status' topic & Publish 'stm_pub_msg' msg (e_stop_status, am_status, cmd_vel_mcu msgs)
        <br/>
        <br/>
        <span_number-section2>* Costmap generation node</span_number-section2>
        - To process 3D object based costmap, I've downsampled the voxel size(0.05m) and segmented as obstacle and ground to reduce the computational resource.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={obstacle_layer} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[D/U Sampling example & Obstacle layer processing block]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- For generating 3D obstacle layer, I configured the layer with <a href='https://github.com/SteveMacenski/spatio_temporal_voxel_layer' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>spatial-temporal_voxel_layer.</a>" }} />
        <span_html dangerouslySetInnerHTML={{ __html: "- You can also check out my parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_navigation/param/costmap_common_params_fw.yaml' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github repo.</a>" }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={inflation_layer} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[costmap related parameter settings]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out my parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_navigation/param/costmap_common_params_fw.yaml' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github repo.</a>" }} />
        {/* <video className="project-video" controls playing onLoadedMetadata={(e) => {e.target.playbackRate = 1.25; }}>
          <source src={voxel_filter_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <VideoComponent_robot2_voxel/>
        <span_sub>[Visualtization of spatial temporal voxel layer]</span_sub>
        <span_number-section2>* Trajectory Planning node</span_number-section2>
        - GPP : I configure the global planner with dlux_global_planner based on A* algorithm and adjust path caching method to reduce computational resource.
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/planners.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here.</a>" }} />
        - LPP: I configure the local planner with teb_local_planner based on time elastic band algorithm and modified checking feasibility part to prevent the robot oscillating on specific circumstance(path-blocked).
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/controllers.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as modified code on my <a href='https://github.com/jaykorea/teb_local_planner_feasibility_check/blob/main/src/teb_local_planner_ros.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github.</a>" }} />
        <br/>
        <span_number-section>3. SLAM node</span_number-section>
        The SLAM node was configured with RTAB-Map to generate an occupancy map and localize the robot in various environments. The node uses synchronized RGBD images from a double Realsense camera, and the GFTT and BRIEF algorithms are used to extract features.
        <br/>
        <br/>
        <span_number-section2>* About RTAB-Map</span_number-section2>
        <VideoComponent_robot2_loopclosure/>
        <span_sub>[RTAB-Map Demo]</span_sub>
        - RTAB-Map (Real-Time Appearance-Based Mapping) is a RGB-D Graph-Based SLAM approach based on an incremental appearance-based loop closure detector.
        <br/>
        -The loop closure detector uses a bag-of-words approach to determinate how likely a new image comes from a previous location or a new location. When a loop closure hypothesis is accepted, a new constraint is added to the map's graph, then a graph optimizer minimizes the errors in the map.
        <br/>
        - A memory management approach is used to limit the number of locations used for loop closure detection and graph optimization, so that real-time constraints on large-scale environments can be met.
        <br/>
        - When a 2D lidar is available, Scan matching can indeed be used in RTAB-Map, but it's not the only technique employed. RTAB-Map can use both visual features and scan matching for localization and mapping, depending on the available sensor data.
        <br/>
        - scan matching can be used to estimate the robot's movement between sensor readings, which can improve the map's accuracy. However, RTAB-Map doesn't rely solely on scan matching; it also uses visual features from a camera to identify previously visited locations (loop closures), which helps correct accumulated mapping errors over time. <br/><br/>
        <span_number-section2>* Core Parameters</span_number-section2>
        Parameters are tuned for dual channel depth camera
        <br/>
        <br/>
        <span_number-section2>i. vis_featuretype</span_number-section2>
        - vis_featuretype parameter is set to "6", which corresponds to ORB features.
        <br/>
        <span_number-section2>ii. vis_estimationtype</span_number-section2>
        - vis_estimationtype parameter is set to "0", corresponding to "PnP" (Perspective-n-Point).
        <br/>
        <span_number-section2>iii. odom_strategy</span_number-section2>
        - odom_strategy parameter is set to "0", corresponding to "Frame-to-Frame" (F2F).
        <br/>
        <span_number-section2>iv. rgbd_neighborlinkrefining</span_number-section2>
        - rgbd_neighborlinkrefining parameter is set to true, refining the transformation of neighbor links with bundle adjustment.
        <br/>
        <span_number-section2>v. rgbd_proximitybyspace</span_number-section2>
        - rgbd_proximitybyspace parameter is set to true, adding links between nodes that are close in space, not only in time.
        <br/>
        <span_number-section2>vi. rgbd_optimizefromgraphend</span_number-section2>
        - rgbd_optimizefromgraphend parameter is set to false, starting the graph optimization from the first node.
        <br/>
        <span_number-section2>vii. OdomF2M/BundleAdjustment</span_number-section2>
        - OdomF2M/BundleAdjustment parameter is set to "0", corresponding to no bundle adjustment.
        <br/>
        <span_number-section2>viii. Vis/CorGuessWinSize</span_number-section2>
        - Vis/CorGuessWinSize parameter is set to "0", meaning that all correspondences are used.
        <br/>
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "You can check out my tuned parameter configuration on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_rtabmap/launch/test/fw_navigation_stereo_test2_jay_2dlidar.launch' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github repo</a> as well as main launch file <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_rtabmap/launch/rtabmap.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here.</a>" }} />
        <br/>
        <span_number-section2>* Front-end</span_number-section2>
        <br/>
        <span_number-section2>i. Loop Closure Detection</span_number-section2>
        This is a crucial part of the back-end process in RTAB-Map. The system uses a bag-of-words approach to identify when the robot has returned to a previously visited location. The rgbd_neighborlinkrefining parameter is set to true, which means that the transformation of neighbor links is refined with bundle adjustment. This can help to improve the accuracy of loop closure detection.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={loop_closure_robot2} alt={title} style={{ width: '70%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Example of loopclosure detection]</span_sub>
        <span_number-section2>ii. GFTT(Good Features To Track)</span_number-section2>
        This is a feature detection algorithm used in computer vision. In the context of RTAB-Map, GFTT is used to detect salient features in the environment that can be tracked across multiple frames. These features serve as landmarks that the robot can use to understand its movement in the environment. GFTT is known for its robustness and efficiency, making it a good choice for real-time applications like autonomous navigation.
        <br/>
        <br/>
        - Efficiency: GFTT is a corner detection method which is less computationally intensive than other methods. This makes it suitable for real-time applications like SLAM where computational resources are often limited.
        <br/>
        - Robustness: GFTT is known for its robustness to changes in lighting, noise, and image rotation. This is crucial in SLAM, as the environment can change dramatically and quickly.
        <br/>
        - Accuracy: GFTT has been shown to provide accurate results in a variety of scenarios, making it a reliable choice for feature detection in SLAM.
        <br/>
        <br/>
        <span_number-section2>iii. BRIEF (Binary Robust Independent Elementary Features)</span_number-section2>
        Once features have been detected in the environment using GFTT, BRIEF is used to describe these features in a way that allows them to be matched across different frames. BRIEF generates a binary descriptor for each feature, which is a string of 0s and 1s that provides a compact, robust, and fast-to-compute representation of the feature. This binary descriptor can be quickly compared with the descriptors of other features to find matches, which is crucial for establishing correspondences between different views of the environment.
        <br/>
        <br/>
        - Speed: BRIEF is computationally efficient, which makes it suitable for real-time applications like SLAM.
        <br/>
        - Memory: BRIEF descriptors take up less space than traditional descriptors, which can be a significant advantage in memory-constrained systems.
        <br/>
        - Matching: BRIEF descriptors can be compared using the Hamming distance, which is faster than the L2 norm used for floating-point descriptors.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={feature_matching} alt={title} style={{ width: '70%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Feature matching using GFTT/BRIEF]</span_sub>
        <br/>
        <span_number-section2>* Back-end</span_number-section2>
        <br/>
        <span_number-section2>i. Graph Optimization</span_number-section2>
        Once a loop closure is detected, a new constraint is added to the map's graph, and a graph optimizer minimizes the errors in the map. The rgbd_optimizefromgraphend parameter is set to false, which means that the graph optimization starts from the first node. This can help to ensure that the map remains consistent over time.
        <br/>
        <span_number-section2>ii. Memory Management</span_number-section2>
        RTAB-Map includes a memory management system to limit the computational cost of loop closure detection and graph optimization. The rgbd_proximitybyspace parameter is set to true, which means that links are added between nodes that are close in space, not only in time. This can help to reduce the number of locations that need to be considered for loop closure detection and graph optimization, allowing the system to run in real-time on large-scale environments.
        <br/>
        <span_number-section2>iii. Feature Matching</span_number-section2>
        The Vis/FeatureType parameter is set to "6", which corresponds to ORB features. ORB features are binary features that can be quickly matched using the Hamming distance, which can help to speed up the loop closure detection process.
        <br/>
        <span_number-section2>iv. Motion Estimation</span_number-section2>
        The Vis/EstimationType parameter is set to "0", corresponding to "PnP" (Perspective-n-Point). This is a method for estimating the motion of the robot based on the observed features and their matches between different frames. The OdomF2M/BundleAdjustment parameter is set to "0", which means that no bundle adjustment is used for motion estimation. This can help to reduce the computational cost of the system.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={slam_front_back_end} alt={title} style={{ width: '80%', padding: '0px', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Front-end & Back-end process of SLAM]</span_sub>
        These parameters are carefully tuned to ensure that the back-end process of RTAB-Map operates efficiently and accurately, allowing the robot to build a consistent map of the environment and accurately estimate its location within that map.
        <br/>
        <br/>
        <span_number-section2>* 3D map</span_number-section2>
        You can check out the loopclosure detection on '0:18 ~ 0:20' on video.
        <br/>
        <br/>
        <VideoComponent_robot2_mapping/>
        <span_sub>[Real-time mapping using RTAB-Map algorithm]</span_sub>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={constructed_3dmap} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Constructed 3d map with fine-tuned parameters]</span_sub>
        {/* <video className="project-video" controls autoPlay onLoadedMetadata={(e) => {e.target.playbackRate = 1.75; }}>
          <source src={localization_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <h4>⦁ Dockerize & S/W Deploy</h4>
        To ensure the stability of processing node and manage the version of software, the whole package is dockerized.
        <br/>
        Parameters and related config files are stayed in local repository.
        <br/>
        <br/>
        <span_number-section>1. Network configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={network_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Network block diagram]</span_sub>
        <span_number-section2>Master Core</span_number-section2>
        - Run roscore
        <br/>
        - Export display to host machine
        <br/>
        - Run vncserver on port xx (differs from 0 to 10)
        <span_number-section2>Init H/W</span_number-section2>
        - Launch fw_robot file (Initialize robot_state_publisher & joint_state_publisher node, LiDAR, LiDAR filtering node, URDF, Motor driver com node)
        <br/>
        <span_number-section2>Init Cam</span_number-section2>
        - Launch realsense2 camera node
        <br/>
        -Run extended Kalman filter node
        <br/>
        - Run IMU filtering node
        <br/>
        <span_number-section2>SLAM</span_number-section2>
        - Launch SLAM node
        <br/>
        <span_number-section2>Naivgation</span_number-section2>
        - Launch navigation node (run mbf, teb_local_planner, costmap_converter, global_palnner)
        <br/>
        - Load robot navigation params
        <br/>
        - Run mbf_legacy node
        <br/>
        - Run distsancetime_calculator, spk, joystick node
        <br/>
        <span_number-section2>UI Backend</span_number-section2>
        - Run pm2 manager to run freeway_ui_backend node
        <br/>
        <br/>
        <span_number-section>2. Node container configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={container_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Container block diagram]</span_sub>
        <span_number-section2>Init H/W</span_number-section2>
        - Link catkin "fw_init" directory to ~/docker_fw04compose/launch/fw_init
        <br/>
        <span_number-section2>Init Cam</span_number-section2>
        - Link catkin "fw_cam" directory to ~/docker_fw04compose/launch/fw_cam
        <br/>
        <span_number-section2>SLAM</span_number-section2>
        - Link catkin "fw_rtabmap" directory to ~/docker_fw04compose/launch/fw_rtabmap
        <br/>
        <span_number-section2>Navigation</span_number-section2>
        - Link catkin "fw_navigation" directory to ~/docker_fw04compose/launch/fw_navigation
        <br/>
        <span_number-section2>UI Backend</span_number-section2>
        - Link catkin "freeway_data" directory to ~/docker_fw04compose/launch/freewayui_backend
        <br/>
        <br/>
        <span_number-section>3. UI server configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ui_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[UI server block diagram]</span_sub>
        <span_number-section2>Front end</span_number-section2>
        - It requests to backend with (Set user param, Script execution, Set goal point, Set initial pose)
        <br/>
        <span_number-section2>Back end</span_number-section2>
        - It saves user parameters
        <br/>
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "You can check out my docker-compose configuration yaml on <a href='https://github.com/jaykorea/fw_rev_04_for_hotelrobot/tree/carto' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here.</a>" }} />

        <h4>⦁ Graph & Frame Definition</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={graph_frame} alt={title} style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing node graph & Defined frames]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the <a href='https://drive.google.com/file/d/1uROfNVnNOVrmJCJn0TngLey5Hp-1X5b6/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>ros node graph</a>and <a href='https://drive.google.com/file/d/1seBZkhrJmri-2nrsSmzuH_diErlss1Dj/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>robot frames</a> by clicking the links." }} />
        <br/>
        <h3>Further Information</h3>
        <span_html dangerouslySetInnerHTML={{ __html: "- For more details and the ROS setup to perform the robot server, please refer to my <a href='https://github.com/jaykorea/fw_rev_04_for_hotelrobot/tree/carto' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a> link." }} />
      </span>
      )
    },

// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************
// development of delivery robot **************************************************************

    {
      title: "Robot Project3",
      thumbnail_title: "Robot Project3",
      thumbnail_description: "My 3rd Robot Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },

    {
      title: "Robot Project4",
      thumbnail_title: "Robot Project4",
      thumbnail_description: "My 4th Robot Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },

    {
      title: "Robot Project5",
      thumbnail_title: "Robot Project5",
      thumbnail_description: "My 5th Robot Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },

    {
      title: "Robot Project6",
      thumbnail_title: "Robot Project6",
      thumbnail_description: "My 6th Robot Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
  ];

  const rnd = [
    {
      title: "Study of Brake Control System for Reach Stacker using AI Technology",
      thumbnail_title: "Study of Brake Control System for Reach Stacker using AI Technology",
      thumbnail_description: "Development of brake Control System with YOLO",
      thumbnail: rndImg1,

      main_body: (
        <span>
        <h3>Object</h3>
        <br/>
        To help container carriers used in the bay to handle cargo more safely, we intend to research and develop a worker recognition algorithm and braking system that can recognize workers in the work radius and prevent safety accidents through emergency braking control. In the future, we would like to research and develop high-performance braking control devices considering profitability so that they can be widely deployed in industrial vehicles such as large forklifts working at port sites. In addition, the purpose is to research and develop technologies that can autonomously drive the entire port operation vehicle so that it can be safer and more efficient in logistics for safe port logistics work
        <br/>
        <h3>Demo</h3>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={check_brake} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Demonstration of Brake control system]</span_sub>
        {/* <VideoComponent_robot2_demo/> */}
        <h3>Hardware</h3>
        In order to carry out the purpose of this study, an experimental braking system was constructed around Jetson Nano. Configuration for the experimental braking system.
        <br/>
        The name and role of the parts were summarized, and the communication connection configuration of the experimental device was summarized.
        <br/>
        <h4>⦁ System Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={sys_arch} alt={title} style={{ width: '65%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Brake control system block diagram]</span_sub>
        <span_number-section2>* Number Experimental Unit Name Role</span_number-section2>
        ① Jetson Nano Developer Kit Image Processing Operations
        <br/>
        ② Touch Screen Panel Image Display
        <br/>
        ③ Intel Realsense Lidar camera L515 Objet Detection and Distance Measuring
        <br/>
        ④ OpenCR Kit servo motor control
        <br/>
        ⑤ DYNAMIXEL XM430-W350 Motor Control Command Execution
        <br/>
        ⑥ Warning Light Driver notification when approaching pedestrian
        <br/>
        ⑦ Buck Converter DC-DC convert(12V-5V)
        <br/>
        ⑧ Battery power supply (DC 12V)
        <br/>
        <br/>
        <span_number-section2>* Inter-device communication method of communication</span_number-section2>
        Jetson Nano Developer Kit -> LCD Display: HDMI
        <br/>
        Jetson Nano Developer Kit -> Intel Realsense Lidar camera: USB
        <br/>
        Jetson Nano Developer Kit -> OpenCR Kit: RS232
        <br/>
        OpenCR Kit -> DYNAMIXEL XM430-W350: RS485
        <br/>
        OpenCR Kit -> Warning Light : D/O
        <br />
        <br/>
        <h4>⦁ Main components</h4>
        <span_number-section>1. LiDAR Camera (RealSense L515)</span_number-section>
        - The system is equipped with a RealSense L515 LiDAR camera.
        <br/>
        - The LiDAR used in this study is a RealSense LiDAR Camera L515 model manufactured by Intel. This LiDAR is a solid-state LiDAR suitable for a variety of applications, featuring excellent depth quality and low power consumption, along with the ability to generate 23 million accurate depth points per second. The RealSense LiDAR Camera L515 lidar is a low-power, high-resolution lidar that scans using an advanced small MEMS mirror It provides high-quality performance and millimeter accuracy for products that have performance and require computer vision functions.
        <br />
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={l515_spec} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Specifications of realsense L515 camera]</span_sub>
        <br />
        <span_number-section>2. DYNAMIXEL XM430-W350</span_number-section>
         - The DYNAMIXEL XM430-W350 model was used as the servo motor used in this study. The servo motor is equipped with a contactless magnetic encoder that can be controlled 360 degrees. The controller of this servo motor is typically an OpenCR1.0 board, and the servo motor is driven through a control signal from this board.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={tss} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Torque-speed graph & specifications]</span_sub>
        <br/>
        - DYNAMIXEL XM430-W350 servo motor controls position through PID control.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={pid_block} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[DYNAMIXEL position controller block diagram]</span_sub>
        <br/>
        - The DYNAMIXEL controls the motor according to the user's instructions through the following steps.
        <br/>
        Step 1) The user's instruction is transmitted through the DIALIXEL bus and then registered at the target location 116.
        <br/>
        Step 2) The target position [Goal Pos (116)] is converted into the desired position trajectory and the desired speed trajectory by the speed [Profile Vel (112)] and the acceleration [Profile Vel (108).
          <br/>
        Step 3) The Feedforward controller and the PID controller calculate the PWM output of the motor according to the desired position trajectory and the desired speed trajectory.
        <br/>
        Step 4) Limit the calculated PWM output, determine the final PWM value, and output it to the motor through the inverter
        <br/>

        <br/>
        - It interfaces with the server through UART TTL to USB communication, ensuring reliable data exchange and control between the robot and the server.<br />
        <br />
        <span_number-section>2. OpenCR1.0</span_number-section>
        - OpenCR 1.0 (Open Source Control Module for ROS Version 1.0) is an open source based robot-only controller with a powerful MCU in the ARM Cortex-M7 family.
        <br />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={opencr} alt={title} style={{ width: '50%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[OpenCR1.0 Board]</span_sub>
        <br/>
        - It supports RS485 and TTL ports for DYNAMIXEL control, provides various communication environments such as UART and CAN, and commercial development tools such as Arduino IDE are also freely available. It provides various dedicated sources based on ROS, and when using ROS, it can maximize the function of OpenCR1.0.
        <br />
        <br />
        <h4>⦁ Experimental Vehicle Overview</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={vehicle_spec} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Experimental vehicle image]</span_sub>
        - An experimental vehicle was manufactured to test the braking system using AI manufactured in this study. The experimental car was manufactured with an electric motor and a battery.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={vehicle_catia} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Mechanical design of experimental vehicle and manufacturing]</span_sub>
        - The experimental vehicle to be used in this study was reviewed, and the experimental vehicle was designed using CATIA as shown. An experimental vehicle was manufactured according to the design plan as follows.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hydra} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Configuration of braking systems for experimental vehicles]</span_sub>
        <br/>
        - In order to conduct this experiment, the braking-related device configuration in the experimental vehicle was configured to form a braking force using hydraulic pressure.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={differential} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Installation of BLDC motors and differential driving devices for experimental vehicles]</span_sub>
        - In order to carry out this experiment, a BLDC motor and a motor controller were used for the drive device in the experimental vehicle, and a 12V battery was used as an electric energy storage device.
        <br/>
        - A differential device for automobiles was also configured for smooth driving.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={motor} alt={title} style={{ width: '80%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[BLDC motor & Specifications]</span_sub>
        <br/>
        - The driving device of the experimental car used the BLDC motor of Golden Motor's HPM48-10000 model.
        <br/>
        - The specifications and performance of this BLDC motor are motors that can produce 10 kW output and have motor performance that runs at up to 6000 rpm. In addition, this motor has the function of implementing regenerative braking as well as temperature protection of the motor and motor controller.

        <h3>Software</h3>
        <h4>⦁ Object detection model</h4>
        In the study, a comparative review was conducted on the Object Detection model necessary to detect the presence or absence of workers within the working radius of container carriers working in ports. The following figure shows the FPS comparison and accuracy comparison of the Object Detection model.
        <br/>
        <br/>
        <span_number-section>* Model selection</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={model_spec} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Object detection model FPS & accuracy]</span_sub>
        As a result of comparing and reviewing several object detection models, YOLO was selected as an object detection model suitable for this study. 
        <br/>
        The reason for selecting YOLO was that among several Object Detection models, YOLO was found to be three times faster than SSD-like performance and slightly less accurate than RetinaNet, but YOLOv3 had excellent performance at the AP50 level, making it suitable for conducting this study.
        <br/>
        We investigated why YOLO is faster but less accurate than other Object Detection models. The Object Detection model is largely divided into one-stage detector and two-stage detector, and YOLO and SSD belong to one-stage detector and are generally known to be fast, but their accuracy is lower than that of two-stage detector. The R-CNN family (R-CNN, Faster R-CNN, etc.) belongs to the two-stage detector and is known to be slow but accurate. The reason for the low accuracy of the one-stage detector is known to be that the Object Detection model has a low accuracy in extreme class imbalance (when the number of other objects in the background is much higher than the number of objects to be detected).
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={model_spec2} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Object Detection Model Performance Comparison]</span_sub>
        YOLO's original creator Joseph Redmon improved YOLO's models from version 1 to version 3, and since then, version 4 and version 5 have been produced by other researchers. What improved as YOLO was upgraded was investigated and summarized as follows. In this study, we will cover up to YOLO version 3.
        <br/>
        <br/>
        <span_number-section>* Review on YOLO version</span_number-section>
        <span_number-section2>i. YOLO v1</span_number-section2>
        YOLOv1 is a method of detecting objects based on a small number of Grid, and it operates faster than Fast R-CNN. However, the fact that it is inspected on a Grid basis has a structural limitation that it is difficult to detect overlapping or small objects, so it has lower accuracy and recognition rate than Fast R-CNN.
        <br/>
        <br/>
        <span_number-section2>ii. YOLO v2</span_number-section2>
        It is a model that improves YOLOv1's recognition rate, accuracy, and operating speed, and has higher performance than YOLOv1. Unlike YOLOv1, which calculated the Bounding Box's Class score by multiplying the Bounding Box's Confidence and Grid's Class Score, YOLOv2 has a high speed and high accuracy when calculating because the anchor box contains the final Class score from the beginning. It can be raised. In Table 5.2.1, as YOLOv1 is upgraded to YOLOv2, the performance improvement of speed and accuracy can be confirmed.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={v1} alt={title} style={{ width: '40%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[YOLO v1, v2 comparison]</span_sub>
        <span_number-section2>iii. YOLO v3</span_number-section2>
        YOLOv3 uses Darknet-53 as a ConvNet and is used by YOLOv2.
        <br/>
        It is more accurate than Darknet-19. YOLOv2 has five unding boxes for each Grid, but YOLOv3 has a total of 63 bounding boxes per Grid, which has higher accuracy and lower operating speed than YOLOv2. Since YOLOv3 is also composed of ConvNet, the resolution of the input image can be adjusted, so if the operating speed is matched to YOLOv2, the result is more accurate than YOLOv2. As you upgrade from YOLOv2 to YOLOv3, you can see the performance improvement of speed and accuracy.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={v2} alt={title} style={{ width: '50%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[YOLO v2, v3 comparison]</span_sub>
        <br/>
        <span_number-section2>iv. tiny-YOLO</span_number-section2>
        Tiny-YOLO is a model that reduces the size of the entire network while maintaining the structural features of the existing YOLO model for low-performance devices. With the development of the YOLO model, tiny-YOLOv1, tiny-YOLOv2, and tiny-YOLOv3 models were developed. YOLO improves accuracy over and over again, but in the case of tiny-YOLO, it can be seen that tiny-YOLOv2 shows higher accuracy than tiny-YOLOv3. The following shows the comparison of speed and accuracy of YOLOv3 and tiny-YOLOv3.
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={tiny} alt={title} style={{ width: '50%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Performance summary for the different networks]</span_sub>
        <br/>
        As a result of reviewing the selection of the Object Detection model, this study selected tiny-YOLOv3 with light weight, fast speed, and high accuracy in consideration of Jetson Nano's embedded hardware performance.
        <br/>
        <br/>
        <h4>⦁ About YOLO</h4> 
        You Only Look Once (YOLO), which has recently attracted attention, is one of the approaches to Object Detection. The object present in the image and the location of the object are algorithms that can be predicted by looking at the image only once. Instead of detecting it as an object of classification, it approaches one regression problem by separating the Bounding Box in multiple dimensions and applying the Class Probability. The input image is divided into the Grid form of the Tensor through CNN, and the Object of the corresponding area is recognized by generating the Bounding Box and Class probability, which are Objects, according to each section. Since YOLO does not apply a separate network for extracting candidate regions, it shows superior performance in terms of processing time compared to Fast R-CNN.
        <br/>
        When YOLO first published the paper in 2015, most of the Object Detection had the best performance of Fast R-CNN (Region with Convolutional Neural Network). YOLO is the first algorithm devised using the One-shot-detection method, and until YOLO appeared, Object Detection using Two-shot-detection was very short of real-time, but the technology of Object Detection using deep learning has gradually increased FPS as shown in the following procedure.[CNN -> R-CNN (0.05FPS) -> Fast R-CNN (0.5FPS) -> Fast R-CNN (7FPS)] YOLO emerged during these technological advances, showing tremendous results, and the graph below shows that YOLO has a high FPS but high mAP (accuracy). The procedure for detecting and recognizing objects through YOLO's algorithm is as follows. Input images, trained data (Weight), and Network Model into GoogLeNet. At this time, it is assumed that the data of the image is 448x448x3 (horizontal Pixels x vertical Pixels x colors (RGB). It consists of 24 Convolution Layers and 2 Fully Connected Layers to extract features and improve performance by oogLeNet. Some convolutional layers use 1x1 eduction layers to change the depth of the layer.
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={yolo_process} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[YOLO operation process]</span_sub>
        Vector (1470x1) can be obtained through the last convolution layer's tensor (7x7x1024) and two fully connected layers. 1470 represents a value obtained by applying [S x S x ((B x P) + C.N)] with the following set values.
        <br/>
        <br/>
        - i. S=7 (Set Grid Cell to 7)
        <br/>
        - ii. B=2 (Set Bounding Box to 2)
        <br/>
        - iii. P-5 (Set Parameters to [Bx, By, Bw, Bh, Po)])
        <br/>
        - iv. C.N=20 (Set Class numbers to 20)
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={yolo_layer} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[YOLO tensor features]</span_sub>
        Through the last Fully Connected Layer, the feature data of the tensor (7x7x30) is generated through conversion, which shows the prediction result. This sensor (7x7x30) contains 49 Grid Cells and contains 10 (5x2) coordinate information and 20 Class information of two Bounding Boxes in one Grid Cell.
        <br/>
        <br/>
        Each cell may have the number of bounding boxes according to the bounding box setting. If the program developer sets up to have two Bounding Boxes per cell, you can have two Bounding Boxes in one cell as shown in the figure below. BoundingBox generally has a fixed ratio of 1:1, 1:2, 2:1, and can be set by program developers. If YOLO is set to divide the inputted image into 7 equal parts, Grid Cell is made in 7x7 size. Each Grid Cell has a Pixel size and center point and detects only one object. Each Grid Cell draws a bounding box at the point where the target object is expected to be located as shown in Figure 5.4.4, and information [Bx, By, Bw, Bh, Po] of the bounding box is constructed in each cell, and each parameter has a normalized value of 0 to 1.
        <br/>
        <br/>
        - bx and by represent the horizontal length (bx) and vertical length (by) from the upper left corner of the cell to the center point of the Bounding Box. 
        <br/>
        - Bw and bh represent the length of the width (bw) and the length (bh) of the bounding box.
        <br/>
        - Po represents the probability that there is an object called Confidence Score in the corresponding Bounding Box.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Bounding box]</span_sub>
        The portion indicated by the left red dot is one of the 7x7 Grid Cells and corresponds to the central portion of the image. And the yellow square and blue square larger than the red box are the Bounding Box predicted by the red Grid Cell. The two bounding boxes must be centered in a red Grid Cell, and the width and length of the box may be smaller than the red Grid Cell, larger than the picture, or not necessarily square. Create a rectangular Bounding Box that surrounds an object nearby, centered somewhere inside the red Grid Cell. Find the class-specific confidence score value of two bounding boxes for each cell. The class-specific confidence score can be multiplied by the conditional class probability of the cell and the confidence score of each box to obtain the classification probability of one Bounding Box.
        <br/>
        <span_number-section2>Class-specific Confidence Score = C x Po</span_number-section2>
        -C : conditional class probability
        <br/>
        -Po: confidence score
        <br/>
        <br/>
        C does not draw a box when the developer sets the threshold and does not meet the criteria. Po finds it again except when the developer sets Threshold and has a certain level of accuracy or less. If the probability of having an object in the Bounding Box is close to zero, information on what classes are there is also very low. If you keep searching, the bounding box has a value of zero. As shown in Figure 5.4.5, five of the 30 channels have information on the first bounding box, and the next five have information on the second bounding box.
        <br/>
        The five parameters (Bx, By, Bw, Bh, Po) of each Bounding Box are arranged in order in the vector (1x30). In the back of 30 channels (20 classes), the probability of what class the object will be if there is an object in the corresponding Grid Cell (red box). The second BoundingBox is computed in the same way.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox2} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Data structure]</span_sub>
        Each Bounding Box has a probability of having an Object. By multiplying this scalar value (one number) with the classification probability of Grid Cell, the classification probability of Bounding Box can be obtained. This is the long yellow box in the picture above. Bound box 1 (bb1), that is, class for the first candidate's Bounding Box It's a scorecard.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox3} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Classfication probability operation]</span_sub>
        In a 7x7 Grid Cell, each Grid Cell has two Bounding Box candidates and obtains a Class Classification score for each Bounding Box. As shown in Figure 5.4.7, 98 Class score vectors (20x1) for two Bounding Box candidates are obtained in 49 Grid cells from [1,1] cells (yellow) to [7,7] cells (red).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox4} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Classfication score vector operation]</span_sub>
        YOLO predicts a total of 98 Bounding Boxes by predicting two Bounding Box candidates each from 7x7 Grid Cells. As shown in Figure 5.4.8, if you look at Dog among the 20 classes, all of the 98 classification reliability scores less than threshold (e.g., 0.2) are replaced with 0. The first digit of the class represents the probability of Dog and sorts the probability of Dog from large to low. If 97 of the 98 class scorecards above are zero and only one is not zero, it can be simply seen that the object is in that position. However, there may be several non-zero objects, especially if the object is large.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox5} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Classfication align process]</span_sub>
        If the reliability score of the Bounding Box is low for a class (e.g., Dog), the judgment that it will not be at least that class (Dog) is set to 0 for a class with a lower reliability than the minimum criterion using threshold. If the Bounding Box's reliability score is sorted from large to small in descending order, an array of 1x98 sizes is obtained as shown above. In the case of Threshold (e.g., 0.2), all less than 0.2 become 0, and those with less than 0.2 reliability indicate that three Bounding Boxes with high probability remain after erasing them.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox6} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Bounding Box with high class score probability]</span_sub>
        After deriving the confidence score for the vector (20x1) class from bb1 to bb98, the NMS algorithm is used to remove duplicate Bounding Boxes in one object. For example, the first value 0.5 with the highest Bounding Box reliability is the maximum value, and the yellow Bounding Box with the second highest reliability is 0.4. If the overlap between the two BoundingBox exceeds 50%, the NMS algorithm is applied to determine that one of the two is duplicated, and the reliability value of 0.4 is set to 0.4. So far, in the 1x20 (first row) ordered for Dog, only 2 Bound Boxes remain, and all 18 remaining are zeroed, removing duplicate Bounding Boxes only for Dog. Of the total 20 classes, the same work will be carried out for the remaining 19 classes excluding Dog.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox7} alt={title} style={{ width: '65%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Result of adjusting NMS algorithm]</span_sub>
        <br/>
        <br/>
        <span_number-section2>NMS(Non-Maximum Suppresion) Algorithm</span_number-section2>
        The NMS algorithm is a method of setting a certain threshold based on one Bounding Box, and then removing it when the part that becomes an intersection is less than the set threshold when comparing other Bounding Boxes. To catch the reference bounding box before NMS, the bounding box is sorted in descending order using the Quick Sort algorithm based on the Class Confidence Score. Next, the NMS algorithm is carried out by comparing other Bounding Boxes in order based on the Bounding Box with the highest Score. The NMS algorithm removes the rest except for one object with the maximum value when several Bounding Boxes overlap. Compare the two bounding boxes
        <br/>
        If the IOU (Intersection of Union) exceeds 0.5, it is judged that it overlaps a lot, and the Bounding Box is eliminated. However, when multiple bounding boxes are not overlapped, each bounding box is thought to be a bounding box of different objects and leaves the bounding boxes alone. To prevent this from happening, the NMS algorithm removes duplicate bounding boxes, leaving only one bounding box.
        <br/>
        Test results show that using NMS increases mAP performance by 2-3%. The figure below is an example of the application of the NMS, where the bounding box overlaps for one object, leaving only one of the most reliable ones, and erasing the rest.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={iou} alt={title} style={{ width: '40%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[IOU(Intersection of Union)]</span_sub>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox8} alt={title} style={{ width: '40%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Result of adjusting NMS algorithm]</span_sub>
        <br/>
        All 98 cells will have a Class-Specific Confidence Score. Among the 20 confidence scores, Class, which has the largest value, is the color of Bounding Box. Choose the class color of Bounding Box and express it. If the largest value is 0, that is, if the class reliability in the corresponding Grid Cell is all 0, then there is no Object and no Bounding Box is drawn. Through this process, a total of two classes may appear in each Grid Cell, one class with a maximum value and another class. If two classes were recognized in one Grid Cell, it can be seen that there is a high probability that the objects overlap because two objects with the same class in one Grid Cell cannot come out. If the above is done for a total of 98 Bounding Boxes, only three Bounding Boxes remain, and the Class of the Bounding Box is expressed in color.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={bbox9} alt={title} style={{ width: '60%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Final Bounding Box and Class Decision]</span_sub>

        <h4>⦁ Brake control system</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={brake_algo} alt={title} style={{ width: '60%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Flowchart of Control Algorithm]</span_sub>
        The control algorithm of the braking control system was configured as above. When the braking control system starts to operate, the RealSense L515 lidar camera recognizes pedestrians around the experimental vehicle in real time.
        <br/>
        If the gap distance between the experimental vehicle and the pedestrian is less than 10m based on 10m, the warning light is set to operate. In addition, if the distance between the experimental car and the pedestrian is less than 5m, the servo motor is operated to apply the brake so that it becomes an emergency brake. After the experimental vehicle stops, when safety is confirmed, the warning light and emergency braking are initialized to operate normally.
        <br/>
        <br/>
        <span_number-section>* Check braking control system operation</span_number-section>
        In order to perform the experiment according to the distance, the distance was indicated by 1m from the experimental vehicle. Figure 7.2.6 shows the results of measuring pedestrians during an experiment in which the braking control algorithm recognizes pedestrians during operation and measures the distance between pedestrians and experimental vehicles.
        <br/> 
        The experiment was conducted after confirming that the braking control system worked well according to the algorithm set.
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={check_brake} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Flowchart of Control Algorithm]</span_sub>


        <h3>Experiment</h3>
        <h4>⦁ Scenarios</h4>
        <span_number-section>Scenario 1</span_number-section>
        When the experimental vehicle is stationary, the measured distance for the actual distance. Error rate measurement and recognition rate (FPS) / Recognition rate (mAP) measurement.
        <br/>
        <br/>
        In order to confirm the accuracy of the measured distance and the performance change of the recognition speed (FPS) and recognition rate (mAP) for the actual distance of the braking control system, an experiment was conducted on the performance change of the braking control system according to the number of pedestrians when the experimental vehicle was stationary. An experiment was conducted to measure the error rate of the measurement distance and the pedestrian recognition performance in the case of one pedestrian and multiple pedestrians (three in this experiment).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={s1} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[If the vehicle is stationary and there is one pedestrian]</span_sub>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={s2} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[If the vehicle is stationary and multiple pedestrians are at the same distance]</span_sub>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={s3} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[The vehicle is stationary and multiple pedestrians are at different distances]</span_sub>
        <br/>
        <br/>
        <span_number-section>Scenario 2</span_number-section>
        The error rate of the measured distance for the actual distance while the experimental car is reversing. Measurement and Recognition Speed (FPS) / Recognition Rate (mAP) measurements
        
        <br/>
        <br/>
        Based on the results that the experimental results of one pedestrian and multiple pedestrians were equal, an experiment was conducted to check the performance change of the brake control system's recognition speed and recognition rate while reversing the experimental vehicle.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={s4} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[mAP score and FPS rate of scenario 2]</span_sub>
        It is a table that summarizes the measurement results for FPS and mAP by Gap distance between the experimental vehicle and the pedestrian, and Figures 8.2.2~8.2.3 show the measurement results as a graph. As a result of the experiment, even if the Gap distance changes, the FPS was about 4.3, and the recognition speed result was within the maximum range of 0.3. In addition, the average mAP was about 95%, and the recognition rate result was within the maximum range of 0.4. Through the above experimental results, it was confirmed that the experimental results when the experimental vehicle was in a stationary state and the experimental results while reversing had the same performance.
        <br/>
        <br/>

        <span_number-section>Scenario 3</span_number-section>
        Measurement of Gap distance between pedestrian and automobile after sudden braking according to pedestrian recognition while experimental vehicle is reversing
        <br/>
        <br/>
        An experiment was conducted on how much gap distance can be secured between pedestrians and cars after rapid braking according to pedestrian recognition during reverse movement. If a pedestrian is recognized within a specified distance of 5m, such as the braking control algorithm, the brake control system is operated by operating the warning lamp and recognizing the pedestrian within a specified distance of 3m. The experiment of suddenly stopping the experimental vehicle while reversing at a speed of about 4 km/h was repeated.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={s5} alt={title} style={{ width: '55%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Gap distance measurement experiment in sudden stop after pedestrian recognition]</span_sub>
        After the braking control system recognizes pedestrians, the servo motor operates the brake pedal to form braking hydraulic pressure, and it takes some time to completely stop the car by generating braking power, and an average of 4FPS is needed to recognize pedestrians.
        <br/>
        <br/>
        <h4>⦁ Results</h4>
        ⦁ It was an opportunity for co-researchers and student researchers to work together on the R&D process by installing a braking control system designed and manufactured directly on their own experimental vehicles.
        <br/>
        <br/>
        ⦁Through the production of a braking control system, which is a key part of this research project, it was possible to understand the embedded system in detail, and through the analysis of the YOLO algorithm, knowledge of the Object Detection algorithm was systematically established.
        <br/>
        <br/>
        ⦁ Through the production of a system that combines object recognition and motor control using the ROS operating system, we were able to experience the importance of optimizing hardware processing power and programming.
        <br/>
        <br/>
        ⦁ The performance of the manufactured braking control system could be confirmed through real-vehicle experiments, and it was an opportunity to explore improvements in the system's hardware and software.
        <br/>
        <br/>
        <h4>⦁ Reference</h4>  
        [1] Ariyanto, Mochammad, et al. "Development of low-cost autonomous
        emergency braking system (AEBS) for an electric car." 2018 5th
        International Conference on Electric Vehicular Technology (ICEVT).
        IEEE, 2018.
        <br/>
        [2] Cicchino, Jessica B. "Effectiveness of forward collision warning and
        autonomous emergency braking systems in reducing front-to-rear
        crash rates." Accident Analysis & Prevention 99 (2017): 142-152.
        [3] Hiraoka, Toshihiro, et al. "Collision risk evaluation index based on
        deceleration for collision avoidance (first report)-Proposal of a new
        index to evaluate collision risk against forward obstacles." Review of
        Automotive Engineering 30.4 (2009): 429-437.
        <br/>
        [4] pass.
        <br/>
        [5] pass.
        <br/>
        [6] http://www.releasewire.com/multimedia/photos/forecast-of-global-re
        ach-stacker-players-market-2023-153459.htm
        <br/>
        [7] https://www.databridgemarketresearch.com/reports/global-reach-sta
        cker-market
        <br/>
        [8] Saito, Yuichi, and Pongsathorn Raksincharoensak. "Shared control
        in risk predictive braking maneuver for preventing collisions with
        pedestrians." IEEE Transactions on Intelligent Vehicles 1.4 (2016):
        314-324.
        <br/>
        [9] Abu, Mohd Azlan, et al. "Automated car braking system: Using
        neural network system via Labview environment." 2012 IEEE
        Conference on Open Systems. IEEE, 2012.
        <br/>
        [10] Nakamura, Yusuke, and Toshiyuki Murakami. "Advanced
        Deceleration Control Considering Driving Resistance by Predicting
        the Position of Pedestrians." IEEJ Journal of Industry Applications
        8.2 (2019): 334-341.
        <br/>
        [11] Cicchino, Jessica B. "Real-world effects of rear automatic braking
        and other backing assistance systems." Journal of safety research
        68 (2019): 41-47.
        <br/>
        [12] Zhang, Xiang, et al. "A fast learning method for accurate and
        robust lane detection using two-stage feature extraction with YOLO
        v3." Sensors 18.12 (2018): 4308.
        <br/>
        [13] Song, Wenjie, et al. "Lane detection and classification for forward
        collision warning system based on stereo vision." IEEE Sensors
        Journal 18.12 (2018): 5151-5163.
        <br/>
        [14] He, Xiangkun, et al. "Autonomous emergency braking based on
        radial basis function neural network variable structure control for
        collision avoidance." 2017 IEEE 2nd Information Technology,
        Networking, Electronic and Automation Control Conference (ITNEC).
        IEEE, 2017.
        <br/>
        [15] Yang, Wei, et al. "Research on longitudinal active collision
        avoidance of autonomous emergency braking pedestrian system
        (AEB-P)." Sensors 19.21 (2019): 4671.
        <br/>
        [16] Wang, Yan, et al. "Pseudo-lidar from visual depth estimation:
        Bridging the gap in 3d object detection for autonomous driving."
        Proceedings of the IEEE/CVF Conference on Computer Vision and
        Pattern Recognition. 2019.[Teslar] [depth]
        <br/>
        [17] Qian, Rui, et al. "End-to-end pseudo-lidar for image-based 3d
        object detection." Proceedings of the IEEE/CVF Conference on
        Computer Vision and Pattern Recognition. 2020.[Teslar] [depth]
        <br/>
        [18] Tosi, Fabio, et al. "Learning monocular depth estimation infusing
        traditional stereo knowledge." Proceedings of the IEEE/CVF
        Conference on Computer Vision and Pattern Recognition. 2019.
        [depth]
        <br/>
        [19] Chae, Hyunmin, et al. "Autonomous braking system via deep
        reinforcement learning." 2017 IEEE 20th International conference on
        intelligent transportation systems (ITSC). IEEE, 2017.
        <br/>
        [20] Khemmar, Redouane, et al. "Real time pedestrian and object
        detection and tracking-based deep learning. application to drone
        visual tracking." (2019).
        <br/>
        [21] Duman, Sonay, Abdullah Elewi, and Zeki Yetgin. "Design and
        implementation of an embedded real-Time system for guiding
        visually impaired individuals." 2019 International Artificial
        Intelligence and Data Processing Symposium (IDAP). IEEE, 2019.
        <br/>
        [22] Strbac, Bojan, et al. "YOLO Multi-Camera Object Detection and
        Distance Estimation." 2020 Zooming Innovation in Consumer
        Technologies Conference (ZINC). IEEE, 2020.
        <br/>
        [23] https://www.servethehome.com/new-nvidia-jetson-xavier-nx-launche
        d/nvidia-jetson-xavier-nx-and-new-jetson-family/
        <br/>
        [24] https://developer.nvidia.com/embedded/jetson-developer-kits
        <br/>
        [25] https://tutorial.cytron.io/2020/10/14/nvidia-jetson-nano-developer-ki
        t-a02-vs-b01-vs-2gb/
        <br/>
        [26] https://developer.nvidia.com/embedded/learn/get-started-jetson-nan
        o-devkit#intro
        <br/>
        [27] https://www.jetsonhacks.com/nvidia-jetson-nano-j41-header-pinout
        <br/>
        [28] https://www.elec4.co.kr/article/articleView.asp?idx=24749
        <br/>
        [29] Lourenco, Francisco, and Helder Araujo. "Intel RealSense SR305,
        D415 and L515: Experimental Evaluation and Comparison of Depth
        Estimation." VISIGRAPP (4: VISAPP). 2021.
        <br/>
        [30] https://www.intelrealsense.com/lidar-camera-l515/
        <br/>
        [31] Intel RealSense LiDAR Camera L515 Datasheet
        <br/>
        [32] https://emanual.robotis.com/docs/en/dxl/x/xm430-w350/
        <br/>
        [33] https://emanual.robotis.com/docs/en/parts/controller/opencr10/
        <br/>
        [34] Sanchez, S. A., H. J. Romero, and A. D. Morales. "A review:
        Comparison of performance metrics of pretrained models for object
        detection using the TensorFlow framework." IOP Conference Series:
        Materials Science and Engineering. Vol. 844. No. 1. IOP Publishing,
        2020.
        <br/>
        [35] Lee, Yong-Hwan, and Youngseop Kim. "Comparison of CNN and
        YOLO for Object Detection." Journal of the semiconductor & display
        technology 19.1 (2020): 85-92.
        <br/>
        [36] REDMON, Joseph; FARHADI, Ali. YOLOv3: An incremental
        improvement. arXiv preprint arXiv:1804.02767, 2018.
        <br/>
        <br/>
        [37] Redmon, Joseph, et al. "You only look once: Unified, real-time
        object detection." Proceedings of the IEEE conference on computer
        vision and pattern recognition. 2016.
        <br/>
        [38] Redmon, Joseph, and Ali Farhadi. "YOLO9000: better, faster,
        stronger." Proceedings of the IEEE conference on computer vision
        and pattern recognition. 2017.
        <br/>
        [39] https://pjreddie.com/darknet/yolo/
        <br/>
        [40] Reyes, Esteban, et al. "Near real-time object recognition for pepper based on deep neural networks running on a backpack." Robot World Cup. Springer, Cham, 2018.
        <br/>
        [41] https://github.com/pjreddie/darknet/issues/901
        <br/>
        [42] ROS robot programming, 2017
        <br/>
        [43] https://www.goldenmotor.com/frame-bldcmotor.htm
        <br/>
        [44] https://www.goldenmotor.com/HPC%20Series%20Controller%20User%20Guide.pdf
        <br/>
        <br/>
        Following are results of a study on the "Convergence and
        Open Sharing System" Project, supported by the Ministry of
        Education and National Research Foundation of Korea
      </span>
      )
    },

    {
      title: "R&D Project2",
      thumbnail_title: "R&D Project2",
      thumbnail_description: "My 2nd R&D Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "R&D Project3",
      thumbnail_title: "R&D Project3",
      thumbnail_description: "My 3rd R&D Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "R&D Project4",
      thumbnail_title: "R&D Project4",
      thumbnail_description: "My 4th R&D Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "R&D Project5",
      thumbnail_title: "R&D Project5",
      thumbnail_description: "My 5th R&D Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "R&D Project6",
      thumbnail_title: "R&D Project6",
      thumbnail_description: "My 6th R&D Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
  ];

  const iot = [
    {
      title: "IoT Project1",
      thumbnail_title: "IoT Project1",
      thumbnail_description: "My 1st IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>
        <h3>Overview</h3>
        <br/>
        This project was initiated to address the growing number of vehicles and the need for vehicle management of car-sharing services used by an unspecified number of people and the need to fulfill the duty of safe driving for traffic safety. Through this study, OBD in-vehicle information is transmitted to AWS Cloud servers using LTE networks, and IoT (Internet of Things device) that can provide information to shared vehicles, insurance companies, or individuals by providing authentication methods that specific groups or individuals can access. This article discusses the overall architecture of the DBMS (Driver Behavior Monitoring System), market demand, concept of OBD PID, hardware and software used in research, algorithm writing for data processing, algorithm operation results, and analysis<br/>
        <h3>Demo Video</h3>
        <VideoComponent_robot2_demo/>
        <span_sub>[Demonstration of Route follow-up, obstacle avoidance on Visual-SLAM]</span_sub>
        <h3>Hardware</h3>
        The hardware of the delivery robot was meticulously designed to ensure optimal performance. The mechanical design was carefully crafted to allow the robot to navigate various terrains and environments.
        <br/>
        The robot was equipped with a range of sensors and modules, each serving a specific function to enhance the robot's capabilities. These included distance sensors for obstacle detection and other modules for various tasks.
        <br/>
        <h4>⦁ Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={hw_block} alt={title} style={{ width: '75%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Hardware block diagram]</span_sub>
        <br/>
        - The driving unit of the delivery robot was designed to provide the necessary propulsion and control for its movement. The specific details of the driving unit, such as the type of motor and torque calculations, may vary based on the requirements of the robot and its payload capacity. However, it is essential to select motors with sufficient power and torque to meet the demands of the robot's weight and maneuverability.
        <br/>
        <br/>
        Reviewing the motor and motor driver specification, I set the safety margin of the stall torque to satisfy to drive normally loading max weight to 100kg.
        <br />
        <br />
        <br/>
        <span_number-section>1. Depth Camera (RealSense D455)</span_number-section>
        - The robot is equipped with a pair of RealSense D455 cameras.
        <br/>
        - These cameras were strategically positioned to provide a wide field of view, approximately 180 degrees.
        <br/>
        - This wide field of view allowed the robot to detect more feature points, which significantly improved the performance of the RTAB-Map RGBD matching
        <br/>
        - The dual-camera setup ensured that the robot could effectively navigate and localize itself in a wide range of environments, making it highly versatile and efficient.<br />
        <br />
        <span_number-section>2. MCU (Microcontroller Unit)</span_number-section> - The robot's MCU is responsible for communication with the robot server using ROSserial.
        <br/>
        - It processes control of LED(WS2812 chip), Joystick, Ultra sonar and interrupt handling(emergency button, control button).
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={joystick_module} alt={title} style={{ width: '45%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[MCU connected modules]</span_sub>
        - Joystick: Output voltage due to variable resistance of joystick to 12 bits of data(0~4095)
        <br/>
        - E-Stop Switch: Control Relay status, '/cmd_vel/emer' using external interrupt
        <br/>
        - Sonar Sensor: Data received from two sensors using I2C(Inter-Integrated Circuit) communication. I2C consists of a line SDA for data communication and a line SCL for timing synchronization.
        <br/>
        - Relay: E-Stop Switch On -> generate magnetic field to cut off the motor driver power
        <br/>
        - CP2102: Data between MCU and intel NUC is exchanged through UART communication
        <br/>
        <br/>
        - It interfaces with the server through UART TTL to USB communication, ensuring reliable data exchange and control between the robot and the server.<br />
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the firmware code <a href='https://github.com/jaykorea/freeway_firmware_rev00' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br />
        <span_number-section>3. 2D LiDAR(RPLiDARS2)</span_number-section>
        - This sensor was used to generate a 2D projection map, which aided the RTAB-Map in image registration.
        - The 2D Lidar used the Iterative Closest Point (ICP) algorithm to align the 2D map with the 3D point cloud generated by the RTAB-Map, improving the accuracy of the map and the robot's localization.
        <br />
        <br />
        This careful and strategic hardware configuration played a crucial role in the successful development of the delivery robot, demonstrating my skills in hardware design and system integration in the field of robotics.
        <br />
        <br />
        <h4>⦁ Mechanical Designs</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={del_mechanical_design} alt={title} style={{ width: '75%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot 3D design using CATIA]</span_sub>
        <br/>
        - It basically designed with 3D design tool CATIA. All the sensor coordinations are based on the axis(Y) of the motor axis(i.e. wheel radius length from the ground).
        <br />
        - The delivery robot is designed with a front-wheel drive configuration, which provides efficient and precise control over its movement. This design choice allows the robot to navigate various environments with ease. The front motor serves as the main propulsion source, driving the robot forward and backward. By independently controlling the two drive wheels, the robot can perform intricate turning maneuvers by varying the speeds of the wheels.
        <br />
        - The front motor serves as the main propulsion source, driving the robot forward and backward. This design choice enables precise control over the robot's speed and direction, allowing it to navigate various environments with ease. The differential drive system utilizes independent control of the two drive wheels, enabling the robot to perform intricate turning maneuvers by varying the speeds of the wheels.
        <br />
        - To ensure stability and maneuverability, the robot features two casters located at the back of the robot body. These casters provide support and allow the robot to maintain balance, even when navigating uneven surfaces or making sharp turns. The combination of the front-wheel drive and rear casters enables the robot to move smoothly and efficiently in different environments.
        <br />
        - In terms of sensor integration, the delivery robot is equipped with a 2D LiDAR sensor. This sensor is strategically positioned at the bottom of the robot body to provide a comprehensive view of the surroundings. By capturing laser scans and detecting obstacles, the 2D LiDAR enhances the robot's perception capabilities, enabling it to navigate safely and avoid collisions.
        <br />
        - The delivery robot also incorporates a camera bracket that holds dual cameras. These cameras are installed at a 90-degree angle to each other, allowing for a wide field of view. This setup enhances the robot's visual perception, enabling it to capture depth information and detect objects with greater accuracy. The combination of the dual cameras and the 2D LiDAR sensor provides the robot with a robust perception system, essential for successful navigation and mapping in various environments.
        <br/>
        - Overall, the mechanical design of the robot, with its front motor-driven configuration, differential drive system, and AGM battery, ensures optimal performance, precise control, and reliable power supply. This design enables the robot to effectively carry out its intended functions while maintaining stability and maneuverability in various environments.
        <br/>
        <br/>

        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={del_chassis} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot chassis design using CAD]</span_sub>
        - In addition to the hardware configuration, the delivery robot incorporates a meticulously designed chassis created using 2D CAD software.
        <br/>
        - The use of 2D CAD allows for precise and accurate modeling of the robot's chassis, ensuring compatibility with the laser-cutting machine.
        <br/>
        <br/>
        <h3>Software</h3>
        <h4>⦁ Architecture</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={sw_block} alt={title} style={{ width: '95%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Robot operating Software block]</span_sub>
        <span_number-section>1. EKF node</span_number-section>
        - The EKF node is a crucial part of the software configuration, responsible for sensor fusion to achieve a robust robot position in the local frame.
        <br/>
        - The EKF node is configured based on the robot_localization package in ROS, which is a collection of state estimation nodes for robots moving in 3D space. It provides an implementation of a nonlinear state estimator, which is used in this project.
        <br/>
        - It fuses data from wheel odometry, IMU, and visual odometry.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ekf_node} alt={title} style={{ width: '85%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Input data needed for sensor fusion]</span_sub>
        <span_number-section2>The inputs to the EKF node are</span_number-section2>
        <span_number-section2>i. Wheel Odometry (vx, vy, vyaw)</span_number-section2>
        - These represent the linear velocities in the x and y directions and the angular velocity around the yaw axis, respectively. These values are derived from the motor encoder.
        <br/>
        <span_number-section2>ii. IMU (vyaw)</span_number-section2>
        - The angular velocity around the yaw axis, derived from the Realsense D455.
        <br/>
        - To ignore yaw angle drift when the robot is stationary, the orientation covariance of IMU data is increased.
        <br/>
        <span_number-section2>iii. Visual Odometry (x, y, z, roll, pitch, yaw)</span_number-section2>
        - These values are obtained from RTAB-Map, which uses GFTT and BRIEF to calculate odometry based on feature matching.
        <br/>
        <br/>
        The EKF node fuses these inputs to estimate the robot's position in the local frame.
        <br/>
        It provides continuous estimation, beginning to estimate the vehicle’s state as soon as it receives a single measurement. If there is a missing in the sensor data (i.e., a long period in which no data is received), the filter will continue to estimate the robot’s state via an internal motion model.
        <br/>
        <br/>
        <VideoComponent_robot2_localization/>
        <span_sub>[Robot Localization with robust estimated pose]</span_sub>
        - This configuration of the EKF node demonstrates a sophisticated understanding of sensor fusion and state estimation in robotics, showcasing the ability to integrate and utilize various data sources for robust and accurate robot localization.
        <br/>

       <span_html dangerouslySetInnerHTML={{ __html: "- You can check out ekf node parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_cam/launch/launch_d455_ekf_wheel_imu_jay.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a>." }} />
        <br/>
        <span_number-section>2. Robot navigtaion node</span_number-section>
        <span_html dangerouslySetInnerHTML={{ __html: "I configured it with <a href='https://github.com/magazino/move_base_flex' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>move_base_flex </a>ros navigation library. You can check out further parameter configuration  <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/launch/fw_move_base_flex.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here</a>." }} />
        <br/>
        <span_number-section2>* Firmware node</span_number-section2>
        Firmware node transmit robot control data through UART including emergency stop and mode selection packet.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={joynode} alt={title} style={{ width: '60%', padding: '0px', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[MCU node block to com with Navigation node side]</span_sub>
        <br/>
        - Run Service server (Req : am_mode, Res : result)
        <br/>
        - Publish am_status2 msg[store service result value], Publish am_status2 msg[store service result value]
        <br/>
        - Bind 'freeway/diagnostics' msg to 'cmd_vel' msg
        <br/>
        - Publish freeway/cancel msg, Publish zero velocity when obstacle is near around the robot
        <br/>
        - Subscribe 'am_status' topic & Publish 'stm_pub_msg' msg (e_stop_status, am_status, cmd_vel_mcu msgs)
        <br/>
        <br/>
        <span_number-section2>* Costmap generation node</span_number-section2>
        - To process 3D object based costmap, I've downsampled the voxel size(0.05m) and segmented as obstacle and ground to reduce the computational resource.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={obstacle_layer} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[D/U Sampling example & Obstacle layer processing block]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- For generating 3D obstacle layer, I configured the layer with <a href='https://github.com/SteveMacenski/spatio_temporal_voxel_layer' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>spatial-temporal_voxel_layer.</a>" }} />
        <span_html dangerouslySetInnerHTML={{ __html: "- You can also check out my parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_navigation/param/costmap_common_params_fw.yaml' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github repo.</a>" }} />
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={inflation_layer} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[costmap related parameter settings]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out my parameters on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_navigation/param/costmap_common_params_fw.yaml' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github repo.</a>" }} />
        {/* <video className="project-video" controls playing onLoadedMetadata={(e) => {e.target.playbackRate = 1.25; }}>
          <source src={voxel_filter_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <VideoComponent_robot2_voxel/>
        <span_sub>[Visualtization of spatial temporal voxel layer]</span_sub>
        <span_number-section2>* Trajectory Planning node</span_number-section2>
        - GPP : I configure the global planner with dlux_global_planner based on A* algorithm and adjust path caching method to reduce computational resource.
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/planners.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here.</a>" }} />
        - LPP: I configure the local planner with teb_local_planner based on time elastic band algorithm and modified checking feasibility part to prevent the robot oscillating on specific circumstance(path-blocked).
        <span_html dangerouslySetInnerHTML={{ __html: "You can find the parameter configuration <a href='https://github.com/jaykorea/fw_docker_compose_wheelchair/blob/main/docker_carto/launch/fw_navigation/param/controllers.yaml' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>here</a> as well as modified code on my <a href='https://github.com/jaykorea/teb_local_planner_feasibility_check/blob/main/src/teb_local_planner_ros.cpp' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github.</a>" }} />
        <br/>
        <span_number-section>3. SLAM node</span_number-section>
        The SLAM node was configured with RTAB-Map to generate an occupancy map and localize the robot in various environments. The node uses synchronized RGBD images from a double Realsense camera, and the GFTT and BRIEF algorithms are used to extract features.
        <br/>
        <br/>
        <span_number-section2>* About RTAB-Map</span_number-section2>
        <VideoComponent_robot2_loopclosure/>
        <span_sub>[RTAB-Map Demo]</span_sub>
        - RTAB-Map (Real-Time Appearance-Based Mapping) is a RGB-D Graph-Based SLAM approach based on an incremental appearance-based loop closure detector.
        <br/>
        -The loop closure detector uses a bag-of-words approach to determinate how likely a new image comes from a previous location or a new location. When a loop closure hypothesis is accepted, a new constraint is added to the map's graph, then a graph optimizer minimizes the errors in the map.
        <br/>
        - A memory management approach is used to limit the number of locations used for loop closure detection and graph optimization, so that real-time constraints on large-scale environments can be met.
        <br/>
        - When a 2D lidar is available, Scan matching can indeed be used in RTAB-Map, but it's not the only technique employed. RTAB-Map can use both visual features and scan matching for localization and mapping, depending on the available sensor data.
        <br/>
        - scan matching can be used to estimate the robot's movement between sensor readings, which can improve the map's accuracy. However, RTAB-Map doesn't rely solely on scan matching; it also uses visual features from a camera to identify previously visited locations (loop closures), which helps correct accumulated mapping errors over time. <br/><br/>
        <span_number-section2>* Core Parameters</span_number-section2>
        Parameters are tuned for dual channel depth camera
        <br/>
        <br/>
        <span_number-section2>i. vis_featuretype</span_number-section2>
        - vis_featuretype parameter is set to "6", which corresponds to ORB features.
        <br/>
        <span_number-section2>ii. vis_estimationtype</span_number-section2>
        - vis_estimationtype parameter is set to "0", corresponding to "PnP" (Perspective-n-Point).
        <br/>
        <span_number-section2>iii. odom_strategy</span_number-section2>
        - odom_strategy parameter is set to "0", corresponding to "Frame-to-Frame" (F2F).
        <br/>
        <span_number-section2>iv. rgbd_neighborlinkrefining</span_number-section2>
        - rgbd_neighborlinkrefining parameter is set to true, refining the transformation of neighbor links with bundle adjustment.
        <br/>
        <span_number-section2>v. rgbd_proximitybyspace</span_number-section2>
        - rgbd_proximitybyspace parameter is set to true, adding links between nodes that are close in space, not only in time.
        <br/>
        <span_number-section2>vi. rgbd_optimizefromgraphend</span_number-section2>
        - rgbd_optimizefromgraphend parameter is set to false, starting the graph optimization from the first node.
        <br/>
        <span_number-section2>vii. OdomF2M/BundleAdjustment</span_number-section2>
        - OdomF2M/BundleAdjustment parameter is set to "0", corresponding to no bundle adjustment.
        <br/>
        <span_number-section2>viii. Vis/CorGuessWinSize</span_number-section2>
        - Vis/CorGuessWinSize parameter is set to "0", meaning that all correspondences are used.
        <br/>
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "You can check out my tuned parameter configuration on my <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_rtabmap/launch/test/fw_navigation_stereo_test2_jay_2dlidar.launch' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>github repo</a> as well as main launch file <a href='https://github.com/jaykorea/fw_docker_compose/blob/main/docker_rtab/launch/fw_rtabmap/launch/rtabmap.launch' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here.</a>" }} />
        <br/>
        <span_number-section2>* Front-end</span_number-section2>
        <br/>
        <span_number-section2>i. Loop Closure Detection</span_number-section2>
        This is a crucial part of the back-end process in RTAB-Map. The system uses a bag-of-words approach to identify when the robot has returned to a previously visited location. The rgbd_neighborlinkrefining parameter is set to true, which means that the transformation of neighbor links is refined with bundle adjustment. This can help to improve the accuracy of loop closure detection.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={loop_closure_robot2} alt={title} style={{ width: '70%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Example of loopclosure detection]</span_sub>
        <span_number-section2>ii. GFTT(Good Features To Track)</span_number-section2>
        This is a feature detection algorithm used in computer vision. In the context of RTAB-Map, GFTT is used to detect salient features in the environment that can be tracked across multiple frames. These features serve as landmarks that the robot can use to understand its movement in the environment. GFTT is known for its robustness and efficiency, making it a good choice for real-time applications like autonomous navigation.
        <br/>
        <br/>
        - Efficiency: GFTT is a corner detection method which is less computationally intensive than other methods. This makes it suitable for real-time applications like SLAM where computational resources are often limited.
        <br/>
        - Robustness: GFTT is known for its robustness to changes in lighting, noise, and image rotation. This is crucial in SLAM, as the environment can change dramatically and quickly.
        <br/>
        - Accuracy: GFTT has been shown to provide accurate results in a variety of scenarios, making it a reliable choice for feature detection in SLAM.
        <br/>
        <br/>
        <span_number-section2>iii. BRIEF (Binary Robust Independent Elementary Features)</span_number-section2>
        Once features have been detected in the environment using GFTT, BRIEF is used to describe these features in a way that allows them to be matched across different frames. BRIEF generates a binary descriptor for each feature, which is a string of 0s and 1s that provides a compact, robust, and fast-to-compute representation of the feature. This binary descriptor can be quickly compared with the descriptors of other features to find matches, which is crucial for establishing correspondences between different views of the environment.
        <br/>
        <br/>
        - Speed: BRIEF is computationally efficient, which makes it suitable for real-time applications like SLAM.
        <br/>
        - Memory: BRIEF descriptors take up less space than traditional descriptors, which can be a significant advantage in memory-constrained systems.
        <br/>
        - Matching: BRIEF descriptors can be compared using the Hamming distance, which is faster than the L2 norm used for floating-point descriptors.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={feature_matching} alt={title} style={{ width: '70%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Feature matching using GFTT/BRIEF]</span_sub>
        <br/>
        <span_number-section2>* Back-end</span_number-section2>
        <br/>
        <span_number-section2>i. Graph Optimization</span_number-section2>
        Once a loop closure is detected, a new constraint is added to the map's graph, and a graph optimizer minimizes the errors in the map. The rgbd_optimizefromgraphend parameter is set to false, which means that the graph optimization starts from the first node. This can help to ensure that the map remains consistent over time.
        <br/>
        <span_number-section2>ii. Memory Management</span_number-section2>
        RTAB-Map includes a memory management system to limit the computational cost of loop closure detection and graph optimization. The rgbd_proximitybyspace parameter is set to true, which means that links are added between nodes that are close in space, not only in time. This can help to reduce the number of locations that need to be considered for loop closure detection and graph optimization, allowing the system to run in real-time on large-scale environments.
        <br/>
        <span_number-section2>iii. Feature Matching</span_number-section2>
        The Vis/FeatureType parameter is set to "6", which corresponds to ORB features. ORB features are binary features that can be quickly matched using the Hamming distance, which can help to speed up the loop closure detection process.
        <br/>
        <span_number-section2>iv. Motion Estimation</span_number-section2>
        The Vis/EstimationType parameter is set to "0", corresponding to "PnP" (Perspective-n-Point). This is a method for estimating the motion of the robot based on the observed features and their matches between different frames. The OdomF2M/BundleAdjustment parameter is set to "0", which means that no bundle adjustment is used for motion estimation. This can help to reduce the computational cost of the system.
        <br/>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={slam_front_back_end} alt={title} style={{ width: '80%', padding: '0px', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Front-end & Back-end process of SLAM]</span_sub>
        These parameters are carefully tuned to ensure that the back-end process of RTAB-Map operates efficiently and accurately, allowing the robot to build a consistent map of the environment and accurately estimate its location within that map.
        <br/>
        <br/>
        <span_number-section2>* 3D map</span_number-section2>
        You can check out the loopclosure detection on '0:18 ~ 0:20' on video.
        <br/>
        <br/>
        <VideoComponent_robot2_mapping/>
        <span_sub>[Real-time mapping using RTAB-Map algorithm]</span_sub>
        <br/>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={constructed_3dmap} alt={title} style={{ width: '80%', padding: '0px', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Constructed 3d map with fine-tuned parameters]</span_sub>
        {/* <video className="project-video" controls autoPlay onLoadedMetadata={(e) => {e.target.playbackRate = 1.75; }}>
          <source src={localization_video} type="video/mp4" />
          Your browser does not support the video tag.
        </video> */}
        <br/>
        <h4>⦁ Dockerize & S/W Deploy</h4>
        To ensure the stability of processing node and manage the version of software, the whole package is dockerized.
        <br/>
        Parameters and related config files are stayed in local repository.
        <br/>
        <br/>
        <span_number-section>1. Network configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={network_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Network block diagram]</span_sub>
        <span_number-section2>Master Core</span_number-section2>
        - Run roscore
        <br/>
        - Export display to host machine
        <br/>
        - Run vncserver on port xx (differs from 0 to 10)
        <span_number-section2>Init H/W</span_number-section2>
        - Launch fw_robot file (Initialize robot_state_publisher & joint_state_publisher node, LiDAR, LiDAR filtering node, URDF, Motor driver com node)
        <br/>
        <span_number-section2>Init Cam</span_number-section2>
        - Launch realsense2 camera node
        <br/>
        -Run extended Kalman filter node
        <br/>
        - Run IMU filtering node
        <br/>
        <span_number-section2>SLAM</span_number-section2>
        - Launch SLAM node
        <br/>
        <span_number-section2>Naivgation</span_number-section2>
        - Launch navigation node (run mbf, teb_local_planner, costmap_converter, global_palnner)
        <br/>
        - Load robot navigation params
        <br/>
        - Run mbf_legacy node
        <br/>
        - Run distsancetime_calculator, spk, joystick node
        <br/>
        <span_number-section2>UI Backend</span_number-section2>
        - Run pm2 manager to run freeway_ui_backend node
        <br/>
        <br/>
        <span_number-section>2. Node container configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={container_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Container block diagram]</span_sub>
        <span_number-section2>Init H/W</span_number-section2>
        - Link catkin "fw_init" directory to ~/docker_fw04compose/launch/fw_init
        <br/>
        <span_number-section2>Init Cam</span_number-section2>
        - Link catkin "fw_cam" directory to ~/docker_fw04compose/launch/fw_cam
        <br/>
        <span_number-section2>SLAM</span_number-section2>
        - Link catkin "fw_rtabmap" directory to ~/docker_fw04compose/launch/fw_rtabmap
        <br/>
        <span_number-section2>Navigation</span_number-section2>
        - Link catkin "fw_navigation" directory to ~/docker_fw04compose/launch/fw_navigation
        <br/>
        <span_number-section2>UI Backend</span_number-section2>
        - Link catkin "freeway_data" directory to ~/docker_fw04compose/launch/freewayui_backend
        <br/>
        <br/>
        <span_number-section>3. UI server configuration</span_number-section>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={ui_block} alt={title} style={{ width: '70%', border: '0px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[UI server block diagram]</span_sub>
        <span_number-section2>Front end</span_number-section2>
        - It requests to backend with (Set user param, Script execution, Set goal point, Set initial pose)
        <br/>
        <span_number-section2>Back end</span_number-section2>
        - It saves user parameters
        <br/>
        <br/>
        <span_html dangerouslySetInnerHTML={{ __html: "You can check out my docker-compose configuration yaml on <a href='https://github.com/jaykorea/fw_rev_04_for_hotelrobot/tree/carto' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>here.</a>" }} />

        <h4>⦁ Graph & Frame Definition</h4>
        <div style={{ display: 'flex', justifyContent: 'center' }}>
          <img src={graph_frame} alt={title} style={{ width: '80%', border: '1px solid rgba(0, 0, 0, 0.5)' }} />
        </div>
        <span_sub>[Processing node graph & Defined frames]</span_sub>
        <span_html dangerouslySetInnerHTML={{ __html: "- You can check out the <a href='https://drive.google.com/file/d/1uROfNVnNOVrmJCJn0TngLey5Hp-1X5b6/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>ros node graph</a>and <a href='https://drive.google.com/file/d/1seBZkhrJmri-2nrsSmzuH_diErlss1Dj/view?usp=drive_link' style='margin-left: 4px; margin-right: 4px; font-size:1.0em'>robot frames</a> by clicking the links." }} />
        <br/>
        <h3>Further Information</h3>
        <span_html dangerouslySetInnerHTML={{ __html: "- For more details and the ROS setup to perform the robot server, please refer to my <a href='https://github.com/jaykorea/fw_rev_04_for_hotelrobot/tree/carto' style='margin-left: 5px; margin-right: 5px; font-size:1.0em'>github</a> link." }} />
      </span>
      )
    },
    {
      title: "IoT Project2",
      thumbnail_title: "IoT Project2",
      thumbnail_description: "My 2nd IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "IoT Project3",
      thumbnail_title: "IoT Project3",
      thumbnail_description: "My 3rd IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "IoT Project4",
      thumbnail_title: "IoT Project4",
      thumbnail_description: "My 4th IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "IoT Project5",
      thumbnail_title: "IoT Project5",
      thumbnail_description: "My 5th IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
    },
    {
      title: "IoT Project6",
      thumbnail_title: "IoT Project6",
      thumbnail_description: "My 6th IoT Project",
      thumbnail: tbd,

      main_body: (
        <span>

        </span>
      )
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
      {/* <img className="background-image-right" src={colorSharp2} alt={title}></img> */}
    </section>
  )
};
