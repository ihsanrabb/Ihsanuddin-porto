import Container from '@material-ui/core/Container';
import Slider from "react-slick";
import Grid from '@material-ui/core/Grid';
import { techData } from '../data'

const settings = {
  dots: false,
  infinite: true,
  slidesToShow: 5,
  slidesToScroll: 1,
  autoplay: true,
  speed: 2000,
  autoplaySpeed: 2000,
  cssEase: "linear",
  pauseOnHover: true,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        speed: 2500,
        autoplaySpeed: 2500,
      }
    }
  ]
};

const TechStack = () => {
  return (
    <Container>
      <div className="tech-wrap">
        <h1 className="tech-title">Tech that i'm using</h1>
        <div className="slider-wrap">
        <Slider {...settings}>
          {techData.map((tech, index) => (
            <div key={index}>
              <Grid container direction="column" justify="center" alignItems="center">
                <img src={tech.imgURL} alt="Avatar" className="tech-icon" />
                <h2 className="text-center">{tech.title}</h2>
              </Grid>
            </div>
          ))}  
        </Slider>
        </div>
      </div>
    </Container>
  )
}

export default TechStack