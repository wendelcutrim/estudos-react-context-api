import './style.css';
import Container from '../Container';

import { NavLink } from 'react-router-dom';

function Navbar() {
  return (
    <nav>
        <Container>
            <ul>
                <li>
                    <NavLink to="/" end>Home</NavLink>
                </li>

                <li>
                    <NavLink to="/about">About</NavLink>
                </li>

                <li>
                    <NavLink to="/products">Products</NavLink>
                </li>
                
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </Container>
    </nav>
  )
}

export default Navbar