import { ICoordinates } from "../store/types";
import { SearchActionType } from "../actions/searchActions";

interface ISearchReducerState {
  searchCoordinates: ICoordinates;
}

const defaultSearchReducerState = {
  searchCoordinates: { lat: null, lon: null },
};

const searchReducer = (
  state: ISearchReducerState = defaultSearchReducerState,
  action: SearchActionType
): ISearchReducerState => {
  switch (action.type) {
    case "SET_LAT": {
      return {
        ...state,
        searchCoordinates: {
          ...state.searchCoordinates,
          lat: action.payload!,
        },
      };
    }
    case "SET_LON": {
      return {
        ...state,
        searchCoordinates: {
          ...state.searchCoordinates,
          lon: action.payload!,
        },
      };
    }
    case "RESET_SEARCH": {
      return {
        ...state,
        searchCoordinates: { lat: null, lon: null },
      };
    }
    default:
      return state;
  }
};

export default searchReducer;
