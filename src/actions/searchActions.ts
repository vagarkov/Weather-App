export type SearchActionType =
  | ISetLocationLatitude
  | ISetLocationLongitude
  | IResetLocationSearch;

interface ISetLocationLatitude {
  type: "SET_LAT";
  payload: number;
}

interface ISetLocationLongitude {
  type: "SET_LON";
  payload: number;
}

interface IResetLocationSearch {
  type: "RESET_SEARCH";
}

const setLocationLatitude = (lat: number): ISetLocationLatitude => ({
  type: "SET_LAT",
  payload: lat,
});

const setLocationLongitude = (lon: number): ISetLocationLongitude => ({
  type: "SET_LON",
  payload: lon,
});

const resetLocationSearch = (): IResetLocationSearch => ({
  type: "RESET_SEARCH",
});

export { setLocationLatitude, setLocationLongitude, resetLocationSearch };
