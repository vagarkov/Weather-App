import React from "react";
import "./Page.scss";
import { Search } from "../../Search/Search";
import { FavouriteLocationsList } from "../../FavouriteLocations/FavouriteLocationsList";
import { CurrentLocationWeather } from "../../CurrentLocationWeather/CurrentLocationWeather";
import { WeekForecast } from "../../WeekForecast/WeekForecast";

export const Page = () => (
  <div className="page">
    <div className="top-elements">
      <Search />
      <FavouriteLocationsList />
    </div>
    <div className="middle-elements">
      <WeekForecast />
      <CurrentLocationWeather />
    </div>
  </div>
);
