import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { getRequestById } from '../Services/RequestService';

export default function RequestDetailsPage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [request, setRequest] = React.useState(null);

  React.useEffect(() => {
    getRequestById(id)
      .then(data => setRequest(data))
      .catch(error => console.error(error))
  }, [id])

  const getStatusBadgeClass = (status) => {
    switch (status?.toLowerCase()) {
      case 'open': return 'bg-danger-subtle text-danger';
      case 'in progress': return 'bg-warning-subtle text-warning';
      case 'resolved': return 'bg-success-subtle text-success';
      default: return 'bg-secondary-subtle text-secondary';
    }
  };

  return (
    <div className="container mt-4" style={{ maxWidth: '600px' }}>
      {request && (
        <div className="card p-4 shadow border" style={{ borderRadius: '16px' }}>
          <div className="d-flex justify-content-between align-items-start mb-3">
            <div>
              <span className="text-muted small fw-bold text-uppercase">{request.category}</span>
              <h3 className="fw-bold text-dark mb-1">{request.title}</h3>
              <span className="text-muted small">ID: {request.id}  • Created on {request.createdAt}</span>
            </div>
            <span className={`badge rounded-pill px-3 py-2 fw-bold ${getStatusBadgeClass(request.status)}`}>
              {request.status}
            </span>
          </div>

          <hr className="text-muted opacity-25" />
          <div className="mb-4">
            <h6 className="fw-bold text-dark mb-2">Description</h6>
            <p className="text-muted bg-light p-3 rounded-3 mb-0" style={{ fontSize: '15px', lineHeight: '1.6' }}>
              {request.description}
            </p>
          </div>

          <div className="d-flex flex-wrap gap-2 pt-2 border-top border-light">
            <div className="bg-light px-3 py-2 rounded-pill small border">
              👤 Student: <strong>{request.studentName}</strong> • ID: <strong>{request.studentId}</strong>
            </div>
            <div className="bg-light px-3 py-2 rounded-pill small border">
              🚪 Room: <strong>{request.roomNo}</strong>
            </div>
            <div className="bg-light px-3 py-2 rounded-pill small border">
              ⚠️ Priority: <strong className="text-danger">{request.priority}</strong>
            </div>
          </div>
        </div>
      )}
      <button 
        className="btn btn-sm btn-link text-decoration-none text-muted fw-bold mb-3 mt-3 p-0"
        onClick={() => navigate(-1)}
      >
        ← Back to Dashboard
      </button>
    </div>
  )
}
