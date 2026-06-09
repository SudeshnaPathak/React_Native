import React from 'react'
import RescueCard from './RescueCard';
import { fetchRescueCasesApi } from './Api';

export default function RescueList() {
  const [rescueCases, setRescueCases] = React.useState([]);

  React.useEffect(() => {
    fetchRescueCasesApi()
    .then((cases) => setRescueCases(cases))
    .catch((error) => console.error('Error fetching rescue cases:', error));
}, []);
 
  return (
    <div className="d-flex flex-wrap gap-4 p-4">
      {rescueCases.map((caseItem) => (
        <RescueCard caseItem={caseItem} />
      ))}
    </div>
  )
}
