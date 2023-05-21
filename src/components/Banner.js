import { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import headerImg from '../assets/img/RIE.jpg';
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = [
    'Our mission is to assist you in the very best way to achieve your academic goals',
  ];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => {
      clearInterval(ticker);
    };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting
      ? fullText.substring(0, text.length - 1)
      : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta((prevDelta) => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex((prevIndex) => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__fadeIn' : ''
                  }
                >
                  <span className="tagline">Welcome to Our Institute</span>
                  <h1>
                    {`Hi!`}{' '}
                    <span
                      className="txt-rotate"
                      dataPeriod="1000"
                      data-rotate='[ "Our mission is to assist you in the very best way to achieve your academic goals", ]'
                    >
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p>
                    Royal Institute Epsom (RIE) campus is situated in the heart
                    of Epsom in Auckland city. Auckland is the largest and most
                    vibrant city in New Zealand. It offers a truly authentic
                    Kiwi as well as international experience.
                  </p>
                  <p>
                    RIE staff help individual students to realise their
                    potential, using the education system with their support and
                    encouragement. Further, Royal Institute Epsom’s programmes
                    NCEA, Cambridge, English Language, and IELTS are well
                    organised and focused on student’s expectations, which means
                    students can finish their studies much comfortably,
                    effectively, and earlier than the traditional timeframe.
                    Obviously with good results.
                  </p>
                  <p>
                    RIE class sizes are small and students will benefit from
                    just like one-on-one tuition and extra learning support from
                    RIE experienced, qualified tutors. From the outset, our
                    friendly student support staff will guide and provide
                    students with all the information students require about
                    studying at the Epsom Campus.
                  </p>
                  <p>
                    RIE is located within walking distance from most of the
                    prestigious high schools in Auckland. Thus, students need
                    not to worry about transport as they can walk to RIE
                    classes. On the other hand, it makes students feel fresh and
                    relaxed when they arrive at the class. It helps them to
                    focus on their lessons. Adult students have the advantage of
                    easy access to trains and busses who are coming after work
                  </p>
                  <p>
                    In order to support individual requirements, the Auckland
                    Campus has a flexible enrolling system for all students.
                  </p>
                  <p>
                    We invite you to join RIE and make your educational journey
                    a success.
                  </p>
                  <button onClick={() => console.log('connect')}>
                    Let’s Connect <ArrowRightCircle size={25} />
                  </button>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? 'animate__animated animate__zoomIn' : ''
                  }
                >
                  <img src={headerImg} alt="Header Img" />
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
