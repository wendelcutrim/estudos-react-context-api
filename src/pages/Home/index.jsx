import './style.css';
/* import { useContext } from 'react'; */

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
/* import { CounterContext } from '../../context/CounterContext'; */
import ChangeCounter from '../../components/ChangeCounter';

// 4 - Refatorando com hook
import { useCounterContext } from '../../hooks/useCounterContext';

// 5 - Context mais complexo
import { useTitleColorContext } from '../../hooks/useTitleColorContext';

function Home() {
  /* const { counter } = useContext(CounterContext); */
  const { counter } = useCounterContext();

  //5 - Contexto mais complexo
  const { color, dispatch } = useTitleColorContext();
  console.log(color);

  //6 - alterando state complexo
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  return (
    <div>
        <Navbar />
          <main className='login-page'>
            <Container>
              <h1 style={{color: color}}>Home Page</h1>
              <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>
              {/* Alterando o valor do contexto */}
              <ChangeCounter variantOne="btn-primary" variantTwo="btn-danger" />

              {/*6 - alterando contexto complexo */}
              <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
              </div>
            </Container>
          </main>
    </div>
  )
}

export default Home