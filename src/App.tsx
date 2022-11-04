import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { Page } from "./components/Pages/Page/Page";
import { ErrorPage } from "./components/Pages/ErrorPage/ErrorPage";
import { IGlobalState } from "./store/types";
import getGeoPosition from "./utils/getGeoPosition";
import {
  locationSetPrimary,
  isGeoPosAvailableSetter,
} from "./actions/locationActions";
import { fetchWeatherByCoordinates } from "./actions/weatherActions";

const App = () => {
  const dispatch = useDispatch();

  const thunkDispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();
  const isGeoPosAvailable = useSelector(
    (state: IGlobalState) => state.location.isGeoPosAvailable
  );
  const weatherFetchingError = useSelector(
    (state: IGlobalState) => state.weather.hasError
  );
  const successGeoLocCallback = (position: GeolocationPosition) => {
    dispatch(isGeoPosAvailableSetter(true));
    navigator.geolocation.getCurrentPosition((position) => {
      const coordinates = {
        lat: position.coords.latitude,
        lon: position.coords.longitude,
      };
      dispatch(locationSetPrimary(coordinates));
      thunkDispatch(fetchWeatherByCoordinates(coordinates));
    });
  };
  const errorGeoLocCallback = (): void => {
    dispatch(isGeoPosAvailableSetter(false));
  };

  useEffect(() => {
    if (isGeoPosAvailable === false) {
      getGeoPosition(successGeoLocCallback, errorGeoLocCallback);
    }
  });

  return (
    <div className="App">
      {isGeoPosAvailable && !weatherFetchingError ? <Page /> : <ErrorPage />}
    </div>
  );
};

export default App;
