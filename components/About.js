import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TrackVisibility from 'react-on-screen';

const About = () => {
  return (
    <div className="about-wrap" id="about-section">
      <Container maxWidth="md" className="about-container">
        <TrackVisibility once>
          {({isVisible}) => isVisible &&
            <Grid container spacing={2}>
              <Grid item xs={12}>
              <h2 className="about-title">ABOUT ME</h2>   
              </Grid>
              <Grid item xs={12} md={6}>
                <img src="/ihsan-avatar.jpg" alt="Avatar" className="about-img animate__animated animate__fadeInLeft" />
              </Grid>
              <Grid item xs={12} md={6}>
                <p className="about-wording animate__animated animate__fadeInLeft">I'm Graduate Information System student with experience in JavaScript with use framework & libraries such as ReactJS and VueJs. A fast learner and decenet managing thing. Reliable team player who want to help by improving the application</p>
                <Button className="animate__animated animate__fadeInLeft" variant="outlined" color="secondary" size="medium" href="https://firebasestorage.googleapis.com/v0/b/sadari-covid.appspot.com/o/news%2F1601438229081CV%20Ihsanuddin%20Rabbani.pdf?alt=media&token=8577b701-62d1-410e-82e8-ccadb24d9513" target="_blank">
                  View resume
                </Button>
              </Grid>
            </Grid>
          }
        </TrackVisibility>
      </Container>
    </div>
  )
}

export default About