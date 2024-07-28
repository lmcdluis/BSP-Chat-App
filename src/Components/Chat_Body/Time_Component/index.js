const TimeComponent = () => {
  const now = new Date()
    .toLocaleTimeString([], {
      hour: "2-digit",
      minute: "2-digit",
      hour12: true,
    })
    .toLowerCase();
  return (
    <div className="time-container">
      <span className="time-message">{now}</span>
    </div>
  );
};
export default TimeComponent;
