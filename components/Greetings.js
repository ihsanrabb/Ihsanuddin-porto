import Button from '@material-ui/core/Button';

const Greetings = () => {
  return (
    <div className="greetings-wrap">
      <div>
        <h1 className="greetings-title animate__animated animate__bounceIn">
          Hi, my name is <span className="main-color">Ihsanuddin Rabbani</span>
          <br/>
          I'm a Front-end Developer.
        </h1>
        <Button variant="outlined" color="primary" size="large" href="#about-section">
          Know more
        </Button>
      </div>
    </div>
  )
}

export default Greetings