/* eslint-disable jsx-a11y/img-redundant-alt */
import React from "react";
import { AiFillStar } from "react-icons/ai";

const ShowMainData = ({ image, name, summary, rating, tags }) => {
  return (
    <>
      <div className="showMainData_container col-lg-11  ">
        <img src={image} className="poster_image col-md-3" alt="image" />
        <div className="sub_container col-md-8">
          <h1>
            {name}
            <span className="rating">
              <AiFillStar className="star" /> {rating}
            </span>
          </h1>
          <div dangerouslySetInnerHTML={{ __html: summary }}></div>
          <h6 className="tag">
            Tags :
            {tags.map((elem, id) => {
              return (
                <span className="tag_span" key={id}>
                  {elem}{" "}
                </span>
              );
            })}
          </h6>
        </div>
      </div>
    </>
  );
};

export default ShowMainData;
