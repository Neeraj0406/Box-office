import React from "react";

const Details = ({ premiered, status }) => {
  return (
    <div className="details_container">
      <h5 className="details_heading">Details </h5>
      <p> status : {premiered} </p>
      <p className="Premierred"> Premierred {status}</p>
    </div>
  );
};

export default Details;
