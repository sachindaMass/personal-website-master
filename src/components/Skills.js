import meter1 from '../assets/img/meter1.svg';
import meter2 from '../assets/img/meter2.svg';
import meter3 from '../assets/img/meter3.svg';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from '../assets/img/arrow1.svg';
import arrow2 from '../assets/img/arrow2.svg';
import colorSharp from '../assets/img/color-sharp.png';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>About Us</h2>
              <h4>Mission</h4>
              <p>
                Royal Institute Epson (RIE) is a New Zealand government
                registered academic institute. Its mission is to “Assist
                students in the very best way to achieve their academic goals”.
              </p>
              {/* <p>
                <br></br>
              </p> */}
              <h4>Vision</h4>
              <p>
                RIE is driven to provide excellent educational opportunities
                that are responsive to the needs of our students and empower
                them to meet and exceed challenges as active participants in
                shaping the future of our world.
              </p>
              <h4>Goals</h4>
              <p>
                <b>Student Success: </b>Meeting student needs by creating an
                educational environment
              </p>
              <p>
                <b>Excellence: </b>Maintaining a high standard of integrity and
                performance
              </p>
              <p>
                <b>Collaboration: </b>Seeking input from all sources and
                respective industries.
              </p>
              {/* <p>
                I have learned different programming languages ​​so far and as
                far as my skills are concerned<br></br>
              </p> */}
              {/* <Carousel
                responsive={responsive}
                infinite={true}
                className="owl-carousel owl-theme skill-slider"
              >
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>English</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Logo Design</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Web Development</h5>
                </div>
              </Carousel> */}
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  );
};
