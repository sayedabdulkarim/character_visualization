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
  return <li onClick={() => handleClick(name, id)}>{name}</li>;
};

export default CardComponent;
