import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cast from "../Components/Show/Cast";
import Details from "../Components/Show/Details";
import Seasons from "../Components/Show/Seasons";
import ShowMainData from "../Components/Show/ShowMainData";
import { getApi } from "../misc/Config";
import "../Components/Style/style.css";

const Show = () => {
  const { id } = useParams();

  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    let isMounted = true;
    getApi(`shows/${id}?embed[]=seasons&embed[]=cast`)
      .then((response) => {
        if (isMounted) {
          setShow(response);
          setLoading(false);
        }
      })
      .catch((err) => {
        if (isMounted) {
          setLoading(false);
        }
      });
    return () => {
      isMounted = false;
    };
  }, [id]);

  return (
    <>
      {loading ? (
        <div> data is loading </div>
      ) : (
        <div className="show_div">
          <ShowMainData
            image={show.image.medium}
            name={show.name}
            summary={show.summary}
            rating={show.rating.average}
            tags={show.genres}
          />
          <Details premiered={show.premiered} status={show.status} />
          <Seasons season={show._embedded.seasons} />
          <Cast cast={show._embedded.cast} />
        </div>
      )}
    </>
  );
};

export default Show;
