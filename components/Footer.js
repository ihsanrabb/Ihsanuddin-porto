import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';

const Footer = () => {

  const scrollTop = () => {
    console.log('keatas')
    window.scrollTo(0, 0)
  }

  return (
    <div className="footer-wrap">
      <Container maxWidth="sm">
        <div className="text-center cr-pointer">
          <KeyboardArrowUpIcon color="secondary" style={{ fontSize: 60 }} onClick={scrollTop}/>
        </div>
        <div className="footer-social">
          <a href="https://www.linkedin.com/in/ihsan-rabbani/" target="_blank">
            <i className="fa fa-linkedin" aria-hidden="true"></i>
          </a>
          <a href="https://github.com/ihsanrabb" target="_blank">
            <i className="fa fa-github" aria-hidden="true"></i>
          </a>
        </div>
        <hr className="footer-hr" />
      </Container>
    </div>
  )
}

export default Footer