import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from './pages/Home';
import Login from './pages/Login';
import NotFoundPage from "./pages/NotFound";

function SystemRoutes() {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<NotFoundPage />} />
        </Routes>
    </BrowserRouter>    
  )
}

export default SystemRoutes