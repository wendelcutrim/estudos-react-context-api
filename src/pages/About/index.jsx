import './style.css';

import { useContext } from 'react';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import { CounterContext } from '../../context/CounterContext';
import ChangeCounter from '../../components/ChangeCounter';


function About() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
        <Navbar />
        <Container>
          <main className='about-page'>
            <h1>About Page</h1>
            <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>

            <ChangeCounter variantOne="btn-primary" variantTwo="btn-danger" />
          </main>
        </Container>
    </div>
  )
}

export default About