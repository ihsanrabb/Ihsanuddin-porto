import Timeline from '@material-ui/lab/Timeline';
import TimelineItem from '@material-ui/lab/TimelineItem';
import TimelineSeparator from '@material-ui/lab/TimelineSeparator';
import TimelineConnector from '@material-ui/lab/TimelineConnector';
import TimelineContent from '@material-ui/lab/TimelineContent';
import TimelineOppositeContent from '@material-ui/lab/TimelineOppositeContent';
import TimelineDot from '@material-ui/lab/TimelineDot';
import LaptopMacIcon from '@material-ui/icons/LaptopMac';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import CodeIcon from '@material-ui/icons/Code';
import Container from '@material-ui/core/Container';
import Fade from 'react-reveal/Fade';

const Experience = () => {

  return (
    <Container maxWidth="md" >
      <h1 className="text-center">Experience</h1>
        <Timeline align="alternate" className="animate__animated animate__fadeIn">
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                JAN 2020 - PRESENT
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Full Time, Front-End Developer
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary">
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <Fade right>
              <TimelineContent>
                <Paper elevation={3} className="experience-box">
                  <Typography variant="h6" component="h1">
                    OTTODIGITAL GROUP
                  </Typography>
                  <ul className="experience-list">
                    <li>Revamped insurtech website using NextJS and Material-UI</li>
                    <li>Developed claims platform for insurance’s company</li>
                    <li>Developed policies recommendation for insurance product based on user data</li>
                    <li>Created claims promotion feature for digital marketing</li>
                  </ul>
                </Paper>
              </TimelineContent>
            </Fade>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                OCT 2019 - DEC 2019
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Internship, Web Developer
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <Fade left>
              <TimelineContent>
                <Paper elevation={3} className="experience-box">
                  <Typography variant="h6" component="h1">
                    INDORELAWAN
                  </Typography>
                  <div dir="rtl">
                    <ul className="list-right experience-list-right">
                      <li>Improved User Interface community page</li>
                      <li>Developed website for volunteer community event to register event using reactJS</li>
                      <li>Coded Community Activity page using AngularJS</li>
                    </ul>
                  </div>
                </Paper>
              </TimelineContent>
            </Fade>
          </TimelineItem>

          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                JUL 2019 - SEP 2019
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Insternship, Front-End Developer
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot variant="outlined" color="primary">
                <CodeIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <Fade right>
              <TimelineContent>
                <Paper elevation={3} className="experience-box">
                  <Typography variant="h6" component="h1">
                    BINAR ACADEMY
                  </Typography>
                  <ul className="experience-list">
                    <li>Developed new feature for binar scholarsip and binar plus student to register in Binar Academy</li>
                    <li>Use NuxtJS framework for web development and vuex for state management</li>
                    <li>Implemented Agile Scrum and GitLab for product development</li>
                  </ul>
                </Paper>
              </TimelineContent>
            </Fade>
          </TimelineItem>
          
          <TimelineItem>
            <TimelineOppositeContent>
              <Typography variant="body2" color="textSecondary">
                JUL 2018 - SEP 2018
              </Typography>
              <Typography variant="body2" color="textSecondary">
                Volunteer, Community Ambassador
              </Typography>
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineDot color="primary">
                <LaptopMacIcon />
              </TimelineDot>
            </TimelineSeparator>
            <Fade left>
              <TimelineContent>
                <Paper elevation={3} className="experience-box">
                  <Typography variant="h6" component="h1">
                    LINGKARAN
                  </Typography>
                  <div dir="rtl">
                    <ul className="list-right experience-list-right">
                      <li>Guided Lingkaran organize their class and get to know within creative & enterpreneurial world</li>
                      <li>Improved communication and leadership skill</li>
                    </ul>
                  </div>
                </Paper>
              </TimelineContent>
            </Fade>
          </TimelineItem>
          
        </Timeline>

    </Container>
  )
}

export default Experience