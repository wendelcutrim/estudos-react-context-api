import './style.css';

import { useContext } from 'react';

import { CounterContext } from '../../context/CounterContext';
import Navbar from '../../components/Navbar';
import Container from '../../components/Container';
import ChangeCounter from '../../components/ChangeCounter';


function Products() {
  const { counter } = useContext(CounterContext);

  return (
    <div>
        <Navbar />
        <Container>
          <main className='products-page'>
            <h1>Products Page</h1>
            <p>Valor do contexto que foi recebido via provider: <strong>{counter}</strong></p>

            <ChangeCounter variantOne="btn-primary" variantTwo="btn-danger" />
          </main>
        </Container>
    </div>
  )
}

export default Products