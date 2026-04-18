import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Dashboard from './pages/Dashboard';
import Inventory from './pages/Inventory';
import AddEditMedicine from './pages/AddEditMedicine';

export default function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/inventory" element={<Inventory />} />
        <Route path="/medicine/new" element={<AddEditMedicine />} />
        <Route path="/medicine/edit/:id" element={<AddEditMedicine />} />
      </Routes>
    </BrowserRouter>
  );
}
