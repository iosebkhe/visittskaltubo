/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

const PopularCard = ({ popularImg, popularTitle }) => {
  return (
    <div className="popular-card">
      <img src={popularImg} alt={popularImg} className="popular-card__img" />
      <Link className="popular-card-link" to={`/hotels/wyaltubo-plaza`}>
        <h2 className="heading-white heading-abs">
          {popularTitle}
        </h2>
      </Link>
    </div>
  );
};

export default PopularCard;