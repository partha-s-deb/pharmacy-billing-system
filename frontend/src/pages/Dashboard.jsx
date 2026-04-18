import { useEffect, useState } from 'react';
import { getAll, getExpiryAlerts } from '../services/medicineService';
import ExpiryBadge from '../components/ExpiryBadge';

export default function Dashboard() {
  const [total, setTotal] = useState(0);
  const [alerts, setAlerts] = useState([]);

  useEffect(() => {
    getAll().then(r => setTotal(r.data.length));
    getExpiryAlerts().then(r => setAlerts(r.data));
  }, []);

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Dashboard</h2>
      <div style={{ display: 'flex', gap: '1rem', marginBottom: '2rem' }}>
        <div style={card}>
          <h3>Total Medicines</h3>
          <p style={{ fontSize: '2rem' }}>{total}</p>
        </div>
        <div style={card}>
          <h3>Expiry Alerts</h3>
          <p style={{ fontSize: '2rem', color: 'red' }}>{alerts.length}</p>
        </div>
      </div>
      <h3>Expiry Alerts</h3>
      {alerts.length === 0 ? <p>No alerts 🎉</p> : (
        <table style={{ width: '100%', borderCollapse: 'collapse' }}>
          <thead>
            <tr style={{ background: '#ecf0f1' }}>
              <th style={th}>Name</th>
              <th style={th}>Expiry Date</th>
              <th style={th}>Status</th>
            </tr>
          </thead>
          <tbody>
            {alerts.map(m => (
              <tr key={m.id} style={{ borderBottom: '1px solid #ddd' }}>
                <td style={th}>{m.name}</td>
                <td style={th}>{m.expiryDate}</td>
                <td style={th}><ExpiryBadge status={m.expiryStatus || 'EXPIRED'} /></td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}

const card = { background: '#ecf0f1', padding: '1rem', borderRadius: '8px', minWidth: '150px' };
const th = { padding: '10px', textAlign: 'left' };