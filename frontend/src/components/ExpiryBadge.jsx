export default function ExpiryBadge({ status }) {
  const styles = {
    EXPIRED: { background: '#e74c3c', color: 'white', padding: '2px 8px', borderRadius: '4px' },
    EXPIRING_SOON: { background: '#f39c12', color: 'white', padding: '2px 8px', borderRadius: '4px' },
    VALID: { background: '#2ecc71', color: 'white', padding: '2px 8px', borderRadius: '4px' },
  };
  return <span style={styles[status] || styles.VALID}>{status}</span>;
}