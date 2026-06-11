import React from 'react'
import RestaurantInfo from './RestaurantInfo';

export default function FoodOrderApp() {
  const [itemsSelected, setItemsSelected] = React.useState(0);
  return (
    <div>
      <p>Selected items: {itemsSelected}</p>
      <button onClick={() => setItemsSelected(itemsSelected => itemsSelected + 1)} style={{marginRight:'15px'}}>+</button>
      <button onClick={() => setItemsSelected(itemsSelected => itemsSelected - 1)} style={{marginRight:'15px'}}>-</button>
      <RestaurantInfo />
    </div>
  )
}
