const Card = ({ label, info }) => {
  return (
    <article className="card-container">
      <p className="card-label">{label}</p>
      <p className="card-info">{info}</p>
    </article>
  );
};

export default Card;
