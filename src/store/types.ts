import { Action } from "redux";

//https://yastatic.net/weather/i/icons/funky/dark/<value from the icon field>.svg.

export interface IGlobalState {
  errorMessage: null | string;
  search: {
    searchCoordinates: ICoordinates;
  };
  location: {
    favouriteLocations: ILocation[];
    isGeoPosAvailable: null | boolean;
    primaryLocation: ILocation;
  };
  weather: {
    weather: IWeather;
    isLoading: boolean;
    hasError: boolean;
  };
}

export interface ICoordinates {
  lat: number | null;
  lon: number | null;
}

export interface ILocation {
  title?: string;
  id: string;
  coordinates: ICoordinates;
  editing: boolean;
  isPrimary?: boolean;
}

export interface IWeather {
  now_dt: string;
  info: {
    lat: string;
    lon: string;
    tzinfo: {
      name: string;
    };
  };
  def_pressure_mm: number;
  geo_object: {
    locality: {
      name: string;
    };
    province: {
      name: string;
    };
    country: {
      name: string;
    };
  };
  fact: {
    temp: number;
    feels_like: number;
    condition: string;
    wind_speed: number;
    wind_dir: string;
    humidity: number;
    pressure_mm: number;
    icon: string;
  };
  forecasts: IWeatherForecast[];
}

export interface IWeatherForecast {
  date: string;
  parts: {
    day: {
      temp_min: number;
      temp_max: number;
      temp_avg: number;
      wind_speed: number;
      wind_dir: number;
      pressure_mm: number;
      humidity: number;
      condition: string;
      icon: string;
    };
  };
}

export interface IAction<P, M> extends Action<string> {
  type: string;
  payload?: P;
  error?: boolean;
  meta?: M;
}
