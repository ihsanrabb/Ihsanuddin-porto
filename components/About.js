import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const About = () => {
  return (
    <div className="about-wrap" id="about-section">
      <Container maxWidth="md" className="about-container">
        <Grid container spacing={2}>
          <Grid item xs={12}>
          <h2 className="about-title">ABOUT ME</h2>   
          </Grid>
          <Grid item xs={12} md={6}>
            <img 
              src="/ihsan-avatar1.jpg" 
              alt="ihsanuddin rabbani" 
              className="about-img" 
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <p className="about-wording">I'm Graduate Information System student with experience in JavaScript with use framework & libraries such as ReactJS and VueJs. A fast learner and decenet managing thing. Reliable team player who want to help by improving the application</p>
            <Button variant="outlined" color="secondary" size="medium" href="/ATS_VC_Ihsan_new.pdf" target="_blank">
              View resume
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  )
}

export default About