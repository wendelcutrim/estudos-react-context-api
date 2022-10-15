import './style.css';

import imageError from '../../assets/img/404-error.svg'

import Container from "../../components/Container";
import Navbar from '../../components/Navbar';

function NotFoundPage() {
  return (
    <div>
        <Navbar />
        <Container>
            <main className="not-found-page">
                <h1>Ops... Something its wrong</h1>
                <img src={imageError} alt="Error 404" />
            </main>
        </Container>
    </div>
  )
}

export default NotFoundPage