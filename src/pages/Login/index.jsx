import './style.css';

import Container from '../../components/Container';
import Navbar from '../../components/Navbar';

function Login() {
  return (
    <div>
        <Navbar />
        <Container>
            <main className='login-page'>
                <h1>Login Page</h1>
            </main>
        </Container>
    </div>
  )
}

export default Login