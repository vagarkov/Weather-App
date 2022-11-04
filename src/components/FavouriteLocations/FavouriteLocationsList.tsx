import React from "react";
import { useSelector } from "react-redux";
import FavoriteLocationsItem from "./FavoriteLocationsItem/FavoriteLocationsItem";
import "./FavouriteLocationsList.scss";
import { IGlobalState, ILocation } from "../../store/types";

export const FavouriteLocationsList = () => {
  const locations = useSelector(
    (state: IGlobalState) => state.location.favouriteLocations
  );

  return (
    <ul className="favorite-location-list">
      {locations.map((location: ILocation) => (
        <li key={location.id}>
          <FavoriteLocationsItem
            id={location.id}
            title={location.title}
            coordinates={location.coordinates}
            editing={location.editing}
          />
        </li>
      ))}
    </ul>
  );
};
