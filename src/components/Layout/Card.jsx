const Card = ({ label, info, type }) => {
  return (
    <article className={type}>
      <p className="card-label">{label}</p>
      <p className="card-info">{info}</p>
    </article>
  );
};

export default Card;
