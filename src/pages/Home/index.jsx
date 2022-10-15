import './style.css';
import { useContext } from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import { CounterContext } from '../../context/CounterContext';

function Home() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
        <Navbar />
          <main className='login-page'>
            <Container>
              <h1>Home Page</h1>
              <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>
            </Container>
          </main>
    </div>
  )
}

export default Home