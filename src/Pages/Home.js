import React, { useState } from "react";
import MainPageLayout from "../Components/MainPageLayout";
import { getApi } from "../misc/Config";
import ShowGrid from "../Components/Show/ShowGrid";
import ActorGrid from "../Components/Actor/ActorGrid";
import "../Components/Style/style.css";

const Home = () => {
  const [input, setInput] = useState("");
  const [results, setResults] = useState(null);
  const [searchOption, setSearchOption] = useState("shows");

  const onShowSelected = searchOption === "shows";
  const showResult = async () => {
    let result = await getApi(`search/${searchOption}?q=${input}`);
    setResults(result);
  };
  const onEnter = (event) => {
    if (event.keyCode === 13) {
      showResult();
    }
  };

  const renderResult = () => {
    if (results && results.length === 0) {
      return "No Results";
    }
    if (results && results.length > 0) {
      return results[0].show ? (
        <ShowGrid data={results} />
      ) : (
        <ActorGrid data={results} />
      );
    }
    return null;
  };

  const onRadioChange = (event) => {
    setSearchOption(event.target.value);
  };

  return (
    <>
      <div className="container">
        <MainPageLayout />
        <div className="search_div">
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="search "
            onKeyDown={onEnter}
            className="search"
          />
          <div className="radio_btn">
            <label htmlFor="show-search">
              <input
                id="show-search"
                type="radio"
                name="search"
                value="shows"
                onChange={onRadioChange}
                checked={onShowSelected}
              />
              Shows
            </label>
            <label htmlFor="actor-search">
              <input
                id="actor-search"
                type="radio"
                name="search"
                value="people"
                onChange={onRadioChange}
                checked={!onShowSelected}
              />
              Actors
            </label>
          </div>
          <button onClick={showResult} className="search_btn">
            Search
          </button>
        </div>
      </div>

      {renderResult()}
    </>
  );
};

export default Home;
