import React from "react";

function SummaryCards({ requests }) {
  console.log("SummaryCards re-rendered");

  // TODO: Students should optimize these repeated calculations using useMemo. -----> DONE
  const total = React.useMemo(() => requests.length, [requests]);
  const openCount = React.useMemo(() => requests.filter((r) => r.status === "Open").length, [requests]);
  const resolvedCount = React.useMemo(() => requests.filter((r) => r.status === "Resolved").length, [requests]);
  const highPriority = React.useMemo(() => requests.filter((r) => r.priority === "High").length, [requests]);

  return (
    <div className="summary-grid">
      <div className="summary-card">Total Requests: {total}</div>
      <div className="summary-card">Open: {openCount}</div>
      <div className="summary-card">Resolved: {resolvedCount}</div>
      <div className="summary-card">High Priority: {highPriority}</div>
    </div>
  );
}

export default React.memo(SummaryCards);
