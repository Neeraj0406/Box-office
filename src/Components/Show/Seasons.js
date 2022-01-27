import React from "react";

const Seasons = ({ season }) => {
  return (
    <div>
      <h5 className="season_heading">Seasons</h5>
      <p>
        {" "}
        Season in total :
        <span style={{ fontWeight: "bold" }}> {season.length} </span>
      </p>
      <p className="total_episode">
        Episode in total :
        <span style={{ fontWeight: "bold" }}>
          {season.reduce((acc, season) => acc + season.episodeOrder, 0)}
        </span>
      </p>
      <div className="all_season_details">
        {season.map((elem) => {
          return (
            <div className="season_details" key={elem.id}>
              <div>
                <p> Season {elem.number}</p>
                <p className="total_episode"> Episode {elem.episodeOrder}</p>
              </div>
              <p className="episode_number">
                Aired {elem.premiereDate} - {elem.endDate}
              </p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Seasons;
