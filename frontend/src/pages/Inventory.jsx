import { useEffect, useState } from 'react';
import { getAll, remove } from '../services/medicineService';
import MedicineTable from '../components/MedicineTable';
import { useNavigate } from 'react-router-dom';

export default function Inventory() {
  const [medicines, setMedicines] = useState([]);
  const navigate = useNavigate();

  useEffect(() => { fetchAll(); }, []);

  const fetchAll = () => getAll().then(r => setMedicines(r.data));

  const handleDelete = (id) => {
    if (window.confirm('Delete this medicine?')) {
      remove(id).then(fetchAll);
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
        <h2>Inventory</h2>
        <button onClick={() => navigate('/medicine/new')}>+ Add Medicine</button>
      </div>
      <MedicineTable medicines={medicines} onDelete={handleDelete} />
    </div>
  );
}