import { Link } from 'react-router-dom';

export default function Navbar() {
  return (
    <nav style={{ padding: '1rem', background: '#2c3e50', color: 'white', display: 'flex', gap: '1rem' }}>
      <span style={{ fontWeight: 'bold', marginRight: 'auto' }}>💊 Pharmacy</span>
      <Link to="/" style={{ color: 'white', textDecoration: 'none' }}>Dashboard</Link>
      <Link to="/inventory" style={{ color: 'white', textDecoration: 'none' }}>Inventory</Link>
      <Link to="/medicine/new" style={{ color: 'white', textDecoration: 'none' }}>+ Add Medicine</Link>
    </nav>
  );
}