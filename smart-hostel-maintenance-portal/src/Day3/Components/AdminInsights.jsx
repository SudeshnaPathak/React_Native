import React from 'react';

export default function AdminInsights({ requests }) {
  const electrical = React.useMemo(() => requests.filter(r => r.category.toLowerCase() === 'electrical').length, [requests]);
  const plumbing = React.useMemo(() => requests.filter(r => r.category.toLowerCase() === 'plumbing').length, [requests]);
  const internet = React.useMemo(() => requests.filter(r => r.category.toLowerCase() === 'internet').length, [requests]);
  const cleaning = React.useMemo(() => requests.filter(r => r.category.toLowerCase() === 'cleaning').length, [requests]);
  const furniture = React.useMemo(() => requests.filter(r => r.category.toLowerCase() === 'furniture').length, [requests]);

  const total = React.useMemo(() => requests.length || 1, [requests]);

  const pElec = React.useMemo(()=> (electrical / total) * 100, [electrical, total]);
  const pPlumb = React.useMemo(() => (plumbing / total) * 100, [plumbing, total]);
  const pInter = React.useMemo(() => (internet / total) * 100, [internet, total]);
  const pClean = React.useMemo(() => (cleaning / total) * 100, [cleaning, total]);
  const pFurn = React.useMemo(() => (furniture / total) * 100, [furniture, total]);
  return (
    <div className="card p-3 shadow-sm border-0 bg-white" style={{ borderRadius: '12px'}}>
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="fw-bold text-dark mb-0">Category Breakdown</h5>
        <span className="badge bg-dark rounded-pill fw-bold">Total: {requests.length}</span>
      </div>

      <div className="d-flex w-100 bg-light rounded-pill overflow-hidden mb-3" style={{ height: '15px' }}>
        <div className="d-flex align-items-center justify-content-center text-white"
            style={{ width: `${pElec}%`, backgroundColor: '#0d6efd', fontSize: '15px', fontWeight: 'bold'}} title="Electrical" >
            <span>{pElec.toFixed(1)}%</span>
        </div>
        <div className="d-flex align-items-center justify-content-center text-white"
            style={{ width: `${pPlumb}%`, backgroundColor: '#ff9f1c', fontSize: '15px', fontWeight: 'bold'}} title="Plumbing" >
            <span>{pPlumb.toFixed(1)}%</span>
        </div>
        <div className="d-flex align-items-center justify-content-center text-white"
        style={{ width: `${pInter}%`, backgroundColor: '#6f42c1', fontSize: '15px', fontWeight: 'bold' }} title="Internet" >
            <span>{pInter.toFixed(1)}%</span>
        </div>

        <div className="d-flex align-items-center justify-content-center text-white"
        style={{ width: `${pClean}%`, backgroundColor: '#198754', fontSize: '15px', fontWeight: 'bold' }} title="Cleaning" >
            <span>{pClean.toFixed(1)}%</span>
        </div>
        <div className="d-flex align-items-center justify-content-center text-white"
        style={{ width: `${pFurn}%`, backgroundColor: '#dc3545', fontSize: '15px', fontWeight: 'bold' }} title="Furniture" >
            <span>{pFurn.toFixed(1)}%</span>
        </div>
      </div>

      <div className="d-flex justify-content-between flex-wrap text-secondary small fw-bold gap-2">
        <div >
          <span className="me-1" style={{ color: '#0d6efd' }}>■</span> Electrical: {electrical}
        </div>
        <div >
          <span className="me-1" style={{ color: '#ff9f1c' }}>■</span> Plumbing: {plumbing}
        </div>
        <div >
          <span className="me-1" style={{ color: '#6f42c1' }}>■</span> Internet: {internet}
        </div>
        <div >
          <span className="me-1" style={{ color: '#198754' }}>■</span> Cleaning: {cleaning}
        </div>
        <div >
          <span className="me-1" style={{ color: '#dc3545' }}>■</span> Furniture: {furniture}
        </div>
      </div>
    </div>
  );
}
