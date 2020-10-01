import Container from '@material-ui/core/Container';
import Button from '@material-ui/core/Button';

const Contact = () => {
  return (
    <div className="contact-wrap text-center">
      <Container maxWidth="md">
        <h1 className="text-white">Contact</h1>
        <p className="text-white contact-wording">Contact me at : ihsanrabbani25@gmail.com</p>
        <p className="text-white contact-wording">Phone number :+62 822 - 9955 - 7542</p>
        <Button variant="outlined" color="secondary" size="medium" className="mb-5" href="tel:+6282299557542">
          contact me
        </Button>
      </Container>
    </div>
  )
}

export default Contact