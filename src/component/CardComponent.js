import React from "react";

const CardComponent = ({ item }) => {
  const { name, status, species, origin, location, image } = item;
  return (
    <>
      {/* left container */}
      <div className="image_container">
        <img src={image} alt={name} />
      </div>
      {/* right container */}
      <div className="content_container">
        <div className="details_section">
          <strong className="heading_text">
            <h2>{name}</h2>
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
          <strong className="heading_text">{location?.name}</strong>
        </div>

        <div className="details_section">
          <span className="text-gray">First seen in:</span>
          <strong className="heading_text">{origin?.name}</strong>
        </div>
      </div>
    </>
  );
};

export default CardComponent;
