import React, { useCallback } from "react";
import {
  setLocationLatitude,
  setLocationLongitude,
  resetLocationSearch,
} from "../../actions/searchActions";
import { useDispatch, useSelector } from "react-redux";
import { locationAddToFavourites } from "../../actions/locationActions";
import "./Search.scss";
import { IGlobalState } from "../../store/types";

export const Search = () => {
  const dispatch = useDispatch();
  const searchCoordinates = useSelector(
    (state: IGlobalState) => state.search.searchCoordinates
  );

  const handleChangeLat = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      dispatch(setLocationLatitude(parseFloat(value)));
    },
    [dispatch]
  );
  const handleChangeLon = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = event.target;
      dispatch(setLocationLongitude(parseFloat(value)));
    },
    [dispatch]
  );

  const clickButton = useCallback(
    (event: React.MouseEvent) => {
      event.preventDefault();
      if (searchCoordinates.lat && searchCoordinates.lon) {
        dispatch(
          locationAddToFavourites({
            lat: searchCoordinates.lat,
            lon: searchCoordinates.lon,
          })
        );
        dispatch(resetLocationSearch());
      }
    },
    [dispatch, searchCoordinates]
  );

  return (
    <div className="search">
      <form className="input-form">
        <input
          className="input-field"
          onChange={handleChangeLat}
          name="lat"
          value={searchCoordinates?.lat || ""}
          placeholder="Lat"
        />
        <input
          className="input-field"
          onChange={handleChangeLon}
          name="lon"
          value={searchCoordinates?.lon || ""}
          placeholder="Lon"
        />
        <button className="search-button" onClick={clickButton}>
          Search
        </button>
      </form>
    </div>
  );
};
