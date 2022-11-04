import { IAction, IWeather } from "../store/types";

interface IWeatherReducerState {
  weather: IWeather;
  isLoading: boolean;
  hasError: boolean;
}

const defaultWeatherReducerState = {
  weather: {} as IWeather,
  isLoading: true,
  hasError: false,
};

const weatherReducer = (
  state: IWeatherReducerState = defaultWeatherReducerState,
  { payload, type }: IAction<IWeather, string>
): IWeatherReducerState => {
  switch (type) {
    case "weather/fetchWeatherByCoordinates/fulfilled":
      if (payload) {
        return {
          ...state,
          weather: payload,
          isLoading: false,
          hasError: false,
        };
      }
      return state;
    case "weather/fetchWeatherByCoordinates/pending":
      return {
        ...state,
        isLoading: true,
        hasError: false,
      };
    case "weather/fetchWeatherByCoordinates/rejected":
      return {
        ...state,
        isLoading: false,
        hasError: true,
      };
    default:
      return state;
  }
};

export default weatherReducer;
