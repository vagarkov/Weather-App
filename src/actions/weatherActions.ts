import { ICoordinates } from "../store/types";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { getWeatherByCoord } from "../utils/getWeather";

const fetchWeatherByCoordinates = createAsyncThunk(
  "weather/fetchWeatherByCoordinates",
  (coordinates: ICoordinates, thunkAPI) => {
    return getWeatherByCoord(coordinates).then((response) => response.data);
  }
);

export { fetchWeatherByCoordinates };
