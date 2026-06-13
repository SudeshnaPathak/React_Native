import React from 'react';

export default function RequestListItem({ request }) {

  const getStatusBadgeClass = (status) => {
    switch (status.toLowerCase()) {
      case 'open': return 'bg-danger-subtle text-danger';
      case 'in progress': return 'bg-warning-subtle text-warning';
      case 'resolved': return 'bg-success-subtle text-success';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  const getBorderColor = (status) => {
    switch (status.toLowerCase()) {
      case 'open': return 'red';       
      case 'in progress': return 'yellow'; 
      case 'resolved': return 'green';    
      default: return 'gray';
    }
  };

  return (
    <div 
      className="card mb-3 shadow-sm" 
      style={{ borderRadius: '12px'}}
    >
      
      <div 
        className="position-absolute top-0 start-0 bottom-0" 
        style={{ 
          width: '6px', 
          backgroundColor: getBorderColor(request.status) 
        }}
      />

      <div className="card-body ps-4 d-flex justify-content-between align-items-center">
        <div>
          <h5 className="card-title fw-bold mb-1 text-dark">{request.title}</h5>
          <p className="card-text text-muted mb-0 small">
            {request.category} • Room {request.roomNo} • {request.createdAt}
          </p>
        </div>

        <div className="d-flex gap-2 align-items-center">
          <span className="badge bg-primary-subtle text-primary rounded-pill px-3 py-2">{request.priority}</span>
          <span className={`badge rounded-pill px-3 py-2 ${getStatusBadgeClass(request.status)}`}>
            {request.status}
          </span>
        </div>
      </div>
    </div>
  );
}
