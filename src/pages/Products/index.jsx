import './style.css';

import Navbar from '../../components/Navbar';
import Container from '../../components/Container';

function Products() {
  return (
    <div>
        <Navbar />
        <Container>
          <main className='products-page'>
            <h1>Products Page</h1>
          </main>
        </Container>
    </div>
  )
}

export default Products