import React from "react";
import ImageNotFound from "../../images/not-found.png";
const Cast = ({ cast }) => {
  return (
    <div>
      <h5 className="cast_heading "> Cast </h5>
      <div className="cast_container col-lg-12">
        {cast.map((elem) => {
          return (
            <div className="all_cast_details" key={elem.person.id}>
              <img
                className="cast_img"
                src={
                  elem.person.image ? elem.person.image.medium : ImageNotFound
                }
                alt="img"
              />
              <h6> {elem.person.name} </h6>
              <p> ({elem.character.name})</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cast;
