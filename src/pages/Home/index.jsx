import './style.css';
/* import { useContext } from 'react'; */

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
/* import { CounterContext } from '../../context/CounterContext'; */
import ChangeCounter from '../../components/ChangeCounter';

// 4 - Refatorando com hook
import { useCounterContext } from '../../hooks/useCounterContext';

function Home() {
  /* const { counter } = useContext(CounterContext); */
  const { counter } = useCounterContext();

  return (
    <div>
        <Navbar />
          <main className='login-page'>
            <Container>
              <h1>Home Page</h1>
              <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>
              {/* Alterando o valor do contexto */}
              <ChangeCounter variantOne="btn-primary" variantTwo="btn-danger" />
            </Container>
          </main>
    </div>
  )
}

export default Home