import React from "react";
import ShowCard from "./ShowCard";
import ImageNotFound from "../../images/not-found.png";
import { useShow } from "../../misc/Custom-hooks.js";
import FadeIn from "react-fade-in";

const ShowGrid = ({ data }) => {
  const [starredShows, dispatchStarred] = useShow();

  return (
    <>
      <FadeIn>
        <div className="card_container">
          {data.map(({ show }) => {
            const isStarred = starredShows.includes(show.id);

            const onStarClick = () => {
              if (isStarred) {
                dispatchStarred({ type: "REMOVE", showId: show.id });
              } else {
                dispatchStarred({ type: "ADD", showId: show.id });
              }
            };
            return (
              <ShowCard
                key={show.id}
                name={show.name}
                id={show.id}
                image={show.image ? show.image.medium : ImageNotFound}
                summary={show.summary}
                isStarred={isStarred}
                onStarClick={onStarClick}
              />
            );
          })}
        </div>
      </FadeIn>
    </>
  );
};

export default ShowGrid;
