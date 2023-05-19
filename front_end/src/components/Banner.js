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
    "My fullname is Saidnazarova Odinanabonu. I'm 15 years old. I study 249-school in 10th grade. I am a front-end web developer. I can make the website more interactive with web animation. I study at Web Brain Academy group G5. When I first came to web brain, I had no knowledge of programming. But now with the help of strong aspirations and teachers, my level of knowledge has greatly increased and I can freely create website views that are used in our daily lives."
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
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Jay`} <br></br><span className="txt-rotate" dataPeriod="1" data-rotate='[ "Robotics Engineer", "Embedded S/W Engineer", "Software Architect"]'><span className="wrap">{text}</span></span></h1>
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
