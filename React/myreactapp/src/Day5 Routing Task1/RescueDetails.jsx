import React from 'react'
import { useLocation, useParams } from 'react-router-dom';
import { NavLink, Outlet } from 'react-router-dom';
import { fetchRescueCaseByIdApi } from './Api';

export default function RescueDetails() {
  const {id} = useParams();
  const [rescueDetails, setRescueDetails] = React.useState(null);

  React.useEffect(() => {
    fetchRescueCaseByIdApi(id)
      .then((details) => setRescueDetails(details))
      .catch((error) => console.error(error));
  }, [id]);

  if (!rescueDetails) return <div>Loading...</div>;

  return (
    <div className='card shadow mt-4' style={{margin: '20px', padding: '30px'}}> 
      <h1 style = {{color: 'orange'}}>Case: {rescueDetails.name} | {rescueDetails.animal}</h1>
      
    <div class="card shadow mt-4">
    <div class="card-header">
      <ul class="nav nav-tabs card-header-tabs">
        <li class="nav-item">
        <NavLink to="overview" className= "nav-link"> Overview </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="medical" className= "nav-link"> Medical Log </NavLink>
        </li>
        <li class="nav-item">
          <NavLink to="location-history" className="nav-link"> Location History </NavLink>
        </li>
      </ul>
    </div>
    <Outlet context={rescueDetails} />
  </div>
  </div>
  )
}
