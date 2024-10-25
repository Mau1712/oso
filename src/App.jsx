import './App.css';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Nav from './Components/Nav/Nav';

import { Home } from './Components/Home/Home';
import CPanel from './Components/CPanel/CPanel';

function App() {
  const location = useLocation(); // Hook para obtener la ubicación actual de la ruta

  return (
    <>
      {location.pathname !== '/cpanel' && <Nav />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cpanel" element={<CPanel />} />
      </Routes>
    </>
  );
}

export default function AppWrapper() {
  return (
    <Router>
      <App />
    </Router>
  );
}
