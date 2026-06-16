import React from "react";

function AnalyticsPanel({ requests }) {
  console.log("AnalyticsPanel re-rendered");

  // TODO: This heavy calculation should later be optimized using useMemo. ----> DONE
  let categoryCounts = React.useMemo(() => {
    const counts = {};
    for (let i = 0; i < 50000; i++) {
      requests.forEach((req) => {
        counts[req.category] = (counts[req.category] || 0) + 1;
      });
    }
    return counts;
  }, [requests]);

  return (
    <div className="card">
      <h3>Analytics Panel</h3>
      <p>This component is intentionally heavy.</p>
      <p>Students must later lazy load this component and optimize the expensive calculation.</p>

      <ul>
        {Object.keys(categoryCounts).map((key) => (
          <li key={key}>
            {key}: {categoryCounts[key]}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default AnalyticsPanel;
