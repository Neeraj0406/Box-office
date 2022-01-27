import React, { useEffect, useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import { useShow } from "../misc/Custom-hooks";
import { getApi } from "../misc/Config";
import ShowGrid from "../Components/Show/ShowGrid";

const Starred = () => {
  const [starred] = useShow();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);
  const [show, setShow] = useState(null);
  useEffect(() => {
    if (starred && starred.length > 0) {
      const promise = starred.map((showId) => getApi(`shows/${showId}`));
      Promise.all(promise)
        .then((apiData) => {
          return apiData.map((show) => ({ show }));
        })
        .then((result) => {
          setShow(result);
          setLoading(false);
        })
        .catch((err) => {
          setError(err.message);
          setLoading(false);
        });
    }
  }, [starred]);
  return (
    <MainPageLayout>
      {loading && <div> Starred shows is loading </div>}
      {!loading && error && <div> erro occured {error}</div>}
      {!loading && !error && !show && <div> No Starred Show are added</div>}
      {!loading && !error && show && <ShowGrid data={show}></ShowGrid>}
    </MainPageLayout>
  );
};

export default Starred;
