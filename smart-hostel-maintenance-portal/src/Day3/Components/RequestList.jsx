import React from 'react';
import RequestListItem from './RequestListItem';

export default function RequestList({ requests , onStatusChange}) {
  return (
    <div 
      className="card p-4 shadow" 
      style={{ borderRadius: '16px' }}
    >
      <h4 className="fw-bold mb-4">Request List</h4>
      
      <div className="list-container pe-2"
       style={{ 
          maxHeight: '300px', 
          overflowY: 'auto'   
        }}>
        {
          requests.length === 0 ? (
            <div className="text-center text-muted py-2">
              No requests found.
            </div>
          ) : requests.map((item) => (
          <RequestListItem key={item.id} request={item} onStatusChange={onStatusChange} />
        ))
        }
      </div>
    </div>
  );
}
