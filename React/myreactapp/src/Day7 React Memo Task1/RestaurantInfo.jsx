import React from 'react'

function RestaurantInfo() {
  return (
    <div>
      {console.log("RestaurantInfo component rendered")}
      <h1>Name: Spice Garden</h1>
      <p>Rating: 4.5</p>
      <p>Delivery Time: 30 mins</p>
    </div>
  )
}

export default React.memo(RestaurantInfo);
