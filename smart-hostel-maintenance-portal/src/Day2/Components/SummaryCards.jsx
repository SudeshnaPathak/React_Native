import React from 'react'

export default function SummaryCards({ cardData }) {
  return (
    <div className="row mb-4 g-3">
      {cardData.map((card, index) => (
        <div className="col-12 col-sm-6 col-md-3" key={index}>
          <div 
            className="card shadow-sm" 
            style={{ borderRadius: '12px'}}
          >
            <div 
              className="position-absolute top-0 start-0 bottom-0" 
              style={{ 
                width: '6px', 
                backgroundColor: card.color, 
                borderRadius: '12px 0 0 12px'
              }}
            />

            <div className="card-body ps-4 d-flex flex-column justify-content-center">
              <span className="text-muted mb-2" style={{ fontSize: '0.85rem' }}>
                {card.title}
              </span>
              <h3 className="fw-bold mb-0">
                {card.count}
              </h3>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
