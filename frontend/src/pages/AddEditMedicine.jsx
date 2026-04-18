import { useState, useEffect } from 'react';
import { create, update, getById } from '../services/medicineService';
import { useNavigate, useParams } from 'react-router-dom';

export default function AddEditMedicine() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: '', brand: '', category: '', price: '', quantity: '', expiryDate: ''
  });

  useEffect(() => {
    if (id) getById(id).then(r => setForm(r.data));
  }, [id]);

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async () => {
    if (id) await update(id, form);
    else await create(form);
    navigate('/inventory');
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '500px' }}>
      <h2>{id ? 'Edit' : 'Add'} Medicine</h2>
      {['name', 'brand', 'category', 'price', 'quantity'].map(field => (
        <div key={field} style={{ marginBottom: '1rem' }}>
          <label style={{ display: 'block', marginBottom: '4px', textTransform: 'capitalize' }}>{field}</label>
          <input
            name={field}
            value={form[field]}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>
      ))}
      <div style={{ marginBottom: '1rem' }}>
        <label style={{ display: 'block', marginBottom: '4px' }}>Expiry Date</label>
        <input
          type="date"
          name="expiryDate"
          value={form.expiryDate}
          onChange={handleChange}
          style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
        />
      </div>
      <button onClick={handleSubmit} style={{ padding: '10px 20px', background: '#2c3e50', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}>
        {id ? 'Update' : 'Save'}
      </button>
    </div>
  );
}