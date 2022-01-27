import React from "react";
import ImageNotFound from "../../images/not-found.png";
import ActorCard from "./ActorCard";

const ActorGrid = ({ data }) => {
  return (
    <>
      <div className="card_container ">
        {data.map(({ person }) => (
          <ActorCard
            key={person.id}
            id={person.id}
            name={person.name}
            deathday={person.deathday}
            image={person.image ? person.image.medium : ImageNotFound}
            country={person.country}
          />
        ))}
      </div>
    </>
  );
};

export default ActorGrid;
