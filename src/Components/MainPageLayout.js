import React from "react";
import Navs from "./Navs";

const MainPageLayout = ({ children }) => {
  return (
    <div>
      <div className="title_container">
        <div className="title">
          <h1> BOX OFFICE </h1>
          <p> Are you looking for a movie or an actor</p>
        </div>
      </div>
      <Navs classname="navs" />
      {children}
    </div>
  );
};

export default MainPageLayout;
