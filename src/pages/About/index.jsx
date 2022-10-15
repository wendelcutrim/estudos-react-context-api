import './style.css';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

function About() {
  return (
    <div>
        <Navbar />
        <Container>
          <main className='about-page'>
            <h1>About Page</h1>
          </main>
        </Container>
    </div>
  )
}

export default About