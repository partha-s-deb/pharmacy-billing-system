import ExpiryBadge from './ExpiryBadge';
import { useNavigate } from 'react-router-dom';

export default function MedicineTable({ medicines, onDelete }) {
  const navigate = useNavigate();

  return (
    <table style={{ width: '100%', borderCollapse: 'collapse' }}>
      <thead>
        <tr style={{ background: '#ecf0f1' }}>
          <th style={th}>Name</th>
          <th style={th}>Brand</th>
          <th style={th}>Category</th>
          <th style={th}>Price</th>
          <th style={th}>Qty</th>
          <th style={th}>Expiry</th>
          <th style={th}>Status</th>
          <th style={th}>Actions</th>
        </tr>
      </thead>
      <tbody>
        {medicines.map(m => (
          <tr key={m.id} style={{ borderBottom: '1px solid #ddd' }}>
            <td style={td}>{m.name}</td>
            <td style={td}>{m.brand}</td>
            <td style={td}>{m.category}</td>
            <td style={td}>₹{m.price}</td>
            <td style={td}>{m.quantity}</td>
            <td style={td}>{m.expiryDate}</td>
            <td style={td}><ExpiryBadge status={m.expiryStatus || 'VALID'} /></td>
            <td style={td}>
              <button onClick={() => navigate(`/medicine/edit/${m.id}`)} style={{ marginRight: '8px' }}>Edit</button>
              <button onClick={() => onDelete(m.id)} style={{ color: 'red' }}>Delete</button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

const th = { padding: '10px', textAlign: 'left' };
const td = { padding: '10px' };