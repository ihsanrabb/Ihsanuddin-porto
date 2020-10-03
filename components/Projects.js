import {projectsData} from '../data'
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';
import TrackVisibility from 'react-on-screen';

const Projects = () => {
  return (
    <>
      <h1 className="text-center">Projects</h1>
      <TrackVisibility once>
        {({isVisible}) => isVisible &&
          <Container maxWidth="lg">
            {projectsData.map((project, index) => (
              <Grid container spacing={4} className="projects-wrap" key={index}>
                <Grid item xs={12} md={5}>
                  <h2 className="animate__animated animate__fadeInLeft">{project.title}</h2>
                  <p className="animate__animated animate__fadeInLeft">{project.description}</p>
                  <Button variant="contained" color="primary" href={project.demoURL} target="_blank">
                    See Live
                  </Button>
                  <Button variant="outlined" color="primary" className="ml-2" href={project.repoURL} target="_blank">
                    Source code
                  </Button>
                </Grid>
                <Grid item xs={12} md={7} container direction="row" justify="center" alignItems="center">
                  <div className="projects-thumbnail animate__animated animate__fadeInLeft">
                    <img src={project.imgURL} alt="Avatar" className="img-fluid" />  
                  </div>
                </Grid>
              </Grid>
            ))}
          </Container>
        }
      </TrackVisibility>
    </>
  )
}

export default Projects