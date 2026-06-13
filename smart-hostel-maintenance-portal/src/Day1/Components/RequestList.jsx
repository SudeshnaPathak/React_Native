import React from 'react';
import RequestListItem from './RequestListItem';

export default function RequestList({ requests }) {
  return (
    <div 
      className="card p-4 shadow" 
      style={{ borderRadius: '16px' }}
    >
      <h4 className="fw-bold mb-4">Request List</h4>
      
      <div className="list-container">
        {requests && requests.map((item) => (
          <RequestListItem key={item.id} request={item} />
        ))}
      </div>
    </div>
  );
}
