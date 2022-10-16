import './style.css';

/* import { useContext } from 'react'; */

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
/* import { CounterContext } from '../../context/CounterContext'; */
import ChangeCounter from '../../components/ChangeCounter';

//4 - Refatorando o contexto com o hook
import { useCounterContext } from '../../hooks/useCounterContext';

//5 - Contexto mais complexo
import { useTitleColorContext } from '../../hooks/useTitleColorContext';



function About() {
  /* const { counter } = useContext(CounterContext);*/
  const { counter } = useCounterContext();

  //6 - alterando state complexo
  
  const { color, dispatch } = useTitleColorContext();
  
  const setTitleColor = (color) => {
    dispatch({type: color});
  }

  
  return (
    <div>
        <Navbar />
        <Container>
          <main className='about-page'>
            <h1 style={{color}}>About Page</h1>
            <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>

            <ChangeCounter variantOne="btn-primary" variantTwo="btn-danger" />

            {/*6 - alterando contexto complexo */}
            <div>
                <button onClick={() => setTitleColor("RED")}>Vermelho</button>
                <button onClick={() => setTitleColor("BLUE")}>Azul</button>
              </div>
          </main>
        </Container>
    </div>
  )
}

export default About