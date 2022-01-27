import React from "react";
import { Link, useLocation } from "react-router-dom";

const Navs = () => {
  const Links = [
    { to: "/", text: "Home" },
    { to: "/starred", text: "Starred" },
  ];

  const location = useLocation();

  return (
    <div>
      <ul className="navs">
        {Links.map((elem, id) => {
          return (
            <li key={id} className="navs_li">
              <Link
                className={`navs_li_links  ${
                  elem.to === location.pathname ? "active_page" : ""
                } `}
                to={elem.to}
              >
                {elem.text}
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Navs;
