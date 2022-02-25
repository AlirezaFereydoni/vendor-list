// Style
import "./style.scss";

// Type
import { iVendor } from "../../../types/interfaces";
import RateBadge from "../../rate";

const RestaurantCard = (props: iVendor) => {
  const {
    backgroundImage = "",
    backgroundImageCustom = "",
    logo = "",
    defLogo = "",
    title = "",
    description = "",
    rate = 0,
    rating = 0,
  } = { ...props };

  return (
    <article className="restaurant-card">
      <div className="restaurant-card-view">
        {/* {<div className="restaurant-card-view-discount">{}</div>}   I couldn't find suitable response for this  */}
        <img
          src={backgroundImage || backgroundImageCustom}
          alt="restaurantView"
          className="restaurant-card-view-img"
          loading="lazy"
          // srcSet={`${backgroundImageCustom} 2x`}
        />
        <img
          src={logo || defLogo}
          alt="restaurantAvatar"
          className="restaurant-card-view-avatar"
          loading="lazy"
        />
      </div>

      <div className="restaurant-card-info">
        <div className="restaurant-card-info-rate">
          <RateBadge rate={rate} rating={rating} />
        </div>
        <div className="restaurant-card-info-detail">
          <h3>{title}</h3>
          <p>{description}</p>
          {/* <div className="restaurant-card-info-detail-post">
            
          </div> */}
        </div>
      </div>
    </article>
  );
};

export default RestaurantCard;
