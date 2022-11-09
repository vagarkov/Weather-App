import React, { useMemo, memo } from "react";
import { useSelector } from "react-redux";
import FavoriteLocationsItem from "./FavoriteLocationsItem/FavoriteLocationsItem";
import "./FavouriteLocationsList.scss";
import { IGlobalState, ILocation } from "../../store/types";

const FavouriteLocationsList = () => {
  const locations = useSelector(
    (state: IGlobalState) => state.location.favouriteLocations
  );

  const hasLocations = useMemo(() => {
    return locations.length !== 0;
  }, [locations]);

  //eslint-disable-next-line
  console.log('locations', locations);

  return (
    <div className="favorite-locations-list">
      <ul className="favorite-locations-list__catalogue">
        {!hasLocations && (
          <span className="favorite-locations-list__title">
            Here are going to be your saved places
          </span>
        )}
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
    </div>
  );
};

export default memo(FavouriteLocationsList);
