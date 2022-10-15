import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import About from "./pages/About";
import Products from "./pages/Products";
import NotFoundPage from "./pages/NotFound";

function SystemRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>    
  )
}

export default SystemRoutes