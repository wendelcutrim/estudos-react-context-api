import './style.css';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

function Home() {
  return (
    <div>
        <Navbar />
        <Container>
          <main className='login-page'>
            <h1>Home Page</h1>
          </main>
        </Container>
    </div>
  )
}

export default Home