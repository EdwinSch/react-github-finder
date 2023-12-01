const StatsCard = ({ label, stat, icon }) => {
  return (
    <article className="stats-card-container">
      <div className="stats-wrapper">
        <p className="card-label">{label}</p>
        <p className="stat-num">{stat}</p>
      </div>
      <figure>{icon}</figure>
    </article>
  );
};

export default StatsCard;
