import React from 'react'

export default function EventDetails() {
  const cardStyle = 'text-center d-flex flex-column align-items-start p-2 rounded w-100';
  return (
    <div className="d-flex align-items-center justify-content-center mb-3 gap-2 w-100">
      <div className={cardStyle} style={{ borderRight: '1px solid #ccc' }}>
        <h4 className='fw-bold'>Event Name:</h4>
        <p>Friday Team Lunch</p>
      </div>
      <div className={cardStyle} style={{ borderRight: '1px solid #ccc' }}>
        <h4 className='fw-bold'>Venue:</h4>
        <p>Green Bowl Cafe</p>
      </div>
      <div className={cardStyle} style={{ borderRight: '1px solid #ccc' }}>
        <h4 className='fw-bold'>Time:</h4>
        <p>1:00 PM</p>
      </div>
      <div className={cardStyle}>
        <h4 className='fw-bold'>Day:</h4>
        <p>Friday</p>
      </div>
    </div>
  )
}
