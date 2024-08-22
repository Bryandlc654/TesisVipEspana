import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomeView from './views/HomeView';
import ContactView from './views/ContactView';
import ServicesView from './views/ServicesView';
import AboutView from './views/AboutView';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomeView />} />
        <Route path="/contacto" element={<ContactView />} />
        <Route path="/servicios" element={<ServicesView />} />
        <Route path="/nosotros" element={<AboutView />} />
      </Routes>
    </Router>
  );
}

export default App;
