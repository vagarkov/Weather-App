import axios from "axios";
import { ICoordinates } from "../store/types";

const apiUrl = "/v2/forecast?";

const getWeatherByCoord = async (coordinates: ICoordinates) =>
  await axios.get(process.env.REACT_APP_YANDEX_API_WEATHER + apiUrl, {
    headers: {
      "X-Yandex-API-Key": process.env.REACT_APP_YANDEX_API_KEY,
    },
    params: {
      lat: coordinates.lat,
      lon: coordinates.lon,
      lang: process.env.REACT_APP_YANDEX_API_LOCALE,
    },
  });

export { getWeatherByCoord };
