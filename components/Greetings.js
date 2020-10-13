import Button from '@material-ui/core/Button';
import Bounce from 'react-reveal/Bounce';

const Greetings = () => {
  return (
    <div className="greetings-wrap">
      <div>
        <Bounce>
          <h1>
            Hi, my name is <span className="main-color">Ihsanuddin Rabbani</span>
            <br/>
            I'm a Front-end Developer.
          </h1>
        </Bounce>
        <Button variant="outlined" color="primary" size="large" href="#about-section">
          Know more
        </Button>
      </div>
    </div>
  )
}

export default Greetings