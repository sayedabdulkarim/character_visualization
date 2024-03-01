import React from "react";

const CardComponent = ({ item, handleClick }) => {
  const {
    id,
    name,
    status,
    species,
    type,
    gender,
    origin,
    location,
    image,
    episode,
    url,
    created,
  } = item;
  return (
    <li onClick={() => handleClick(name, id)} className="card_container">
      {/* left container */}
      <div className="image_container">
        <img src={image} alt={name} />
      </div>
      {/* right container */}
      <div className="content_container">
        <div className="details_section">
          <strong className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR heading_text">
            <h2>Crystal Dealer</h2>
          </strong>
          <span className="status">
            <span
              className={`${
                status === "Alive" ? "status__icon_alive" : "status__icon_dead"
              }`}
            ></span>{" "}
            {status} - {species}
          </span>
        </div>

        <div className="details_section">
          <span className="text-gray">Last known location:</span>
          <strong className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR heading_text">
            {location?.name}
          </strong>
        </div>

        <div className="details_section">
          <span className="text-gray">First seen in:</span>
          <strong className="externalLink__ExternalLink-sc-1lixk38-0 ffGNdR heading_text">
            {origin?.name}
          </strong>
        </div>
      </div>
    </li>
  );
};

export default CardComponent;
