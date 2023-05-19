import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import { HashLink } from 'react-router-hash-link';
import {
  BrowserRouter as Router
} from "react-router-dom";

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [ "Robotics Engineer", "Embedded S/W Engineer", "Software Architect" ];
  const period = 2000;
    const [paragraphText, setParagraphText] = useState(
    "I am on a master of electrical and electronic computer engineering at the Graduate Scholl of Engineering of Korea University . As an electrical and electronic computer engineering major, I have developed a strong sense of responsibility and excitement for making the programs I create work flawlessly. Recently, I have become increasingly interested in unmanned robotics systems and their potential to revolutionize industries ranging from agriculture to manufacturing. In particular, I am passionate about developing a light and robust visual-based SLAM system that utilizes artificial intelligence to run efficiently on mid-performance SBCs. My goal is to create a system that is not only highly precise but also incredibly durable, capable of operating in challenging environments with minimal intervention. I am excited to contribute to this field and to help shape the future of robotics. Plz feel free to contact by clicking the below button :)"
  );

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(100);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  const updateParagraphText = () => {
    const newText = "New paragraph text"; // Replace with the new text you want to set
    setParagraphText(newText);
  };

  return (
    <Router>
      <section className="banner" id="home">
        <Container>
          <Row className="aligh-items-center">
            <Col xs={12} md={6} xl={7}>
              <TrackVisibility>
                {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my CV</span>
                  <h1>{`Hi! I'm Jay`} <br></br></h1>
                  <h2><span className="txt-rotate" dataPeriod="1" data-rotate='[ "Robotics Engineer", "Embedded S/W Engineer", "Software Architect"]'><span className="wrap">{text}</span></span></h2>
                  <p>{paragraphText}</p>
                    <HashLink smooth to="#contact">
                      <button>Contact Here<ArrowRightCircle size={30} /></button>
                    </HashLink>
                </div>}
              </TrackVisibility>
            </Col>
            <Col xs={12} md={6} xl={5}>
              <TrackVisibility>
                {({ isVisible }) =>
                  <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                    <img src={headerImg} alt="Header Img"/>
                  </div>}
              </TrackVisibility>
            </Col>
          </Row>
        </Container>
      </section>
    </Router>
  )
}
