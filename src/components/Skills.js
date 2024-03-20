import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/color-sharp.png"
import { useState } from "react";
import { useEffect } from "react";

export const Skills = () => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  const handleResponsive = () => {
    // Obtén el ancho de la ventana
    const windowWidth = window.innerWidth;

    // Ajusta slidesToShow según el ancho de la ventana
    if (windowWidth > 1000) {
      setSlidesToShow(3);
    } else if (windowWidth <= 1000 && windowWidth > 800) {
      setSlidesToShow(2);
    } else {
      setSlidesToShow(1);
    }
  };

  useEffect(() => {
    // Escucha el cambio de tamaño de la ventana
    window.addEventListener('resize', handleResponsive);

    // Limpia el evento al desmontar el componente
    return () => {
      window.removeEventListener('resize', handleResponsive);
    };
  }, []);

  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
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
              <h2>Skills</h2>
              <p>With more than 2 years of experience in the world of software development and web design, I have gained solid skills and a deep understanding of emerging technologies. My experience in UX/UI using Figma has allowed me to design intuitive and engaging user interfaces. My passion for technology and commitment to continuous improvement drive me to constantly look for new opportunities to grow and learn</p>
              <Carousel responsive={responsive}
                autoplay={true}
                autoplaySpeed={900}
                slidesToShow={slidesToShow}
                infinite={true} className="owl-carousel owl-theme skill-slider">
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Html</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>WordPress</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Css/Scss</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Figma</h5>
                </div>

                <div className="item">
                  <img src={meter2} alt="Image" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Image" />
                  <h5>Angular</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Java</h5>
                </div>

                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Node js</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Image" />
                  <h5>Sprint Boot</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
