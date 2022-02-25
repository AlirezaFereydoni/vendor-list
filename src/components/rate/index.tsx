import "./style.scss";

const RateBadge = ({ rate, rating }: { rate: number; rating: number }) => {
  return (
    <div className="rate-badge">
      <div className="rate-badge-box">
        <span>{rate}</span>
      </div>

      <div className="rate-badge-rating">({rating.toFixed(2)})</div>
    </div>
  );
};

export default RateBadge;
