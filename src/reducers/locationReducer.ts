import { ILocation } from "../store/types";
import { LocationActionType } from "../actions/locationActions";

interface ILocationReducerState {
  favouriteLocations: ILocation[];
  isGeoPosAvailable: boolean;
  primaryLocation: ILocation;
}

const defaultLocationReducerState = {
  favouriteLocations: [] as ILocation[],
  isGeoPosAvailable: false,
  primaryLocation: {} as ILocation,
};

const locationReducer = (
  state: ILocationReducerState = defaultLocationReducerState,
  action: LocationActionType
): ILocationReducerState => {
  switch (action.type) {
    case "ADD_LOCATION_TO_FAVOURITES": {
      const favouriteLocations = [...state.favouriteLocations];
      const id = `${action.payload?.lat}${action.payload?.lon}`;
      favouriteLocations.push({
        title: "",
        id,
        coordinates: action.payload! || "",
        editing: false,
      });
      return {
        ...state,
        favouriteLocations,
      };
    }
    case "SET_PRIMARY_LOCATION": {
      const id = `${action.payload?.lat}${action.payload?.lon}`;
      return {
        ...state,
        primaryLocation: {
          title: "primary location",
          id,
          coordinates: action.payload! || "",
          editing: false,
        },
      };
    }
    case "DELETE_LOCATION_FROM_FAVOURITES": {
      const favouriteLocations = [...state.favouriteLocations];
      const filtered = favouriteLocations.filter((location: ILocation) => {
        return location.id !== action.payload;
      });

      return {
        ...state,
        favouriteLocations: filtered,
      };
    }
    case "SWITCH_EDITITNG_LOCATION_FROM_FAVOURITES": {
      const favouriteLocations = [...state.favouriteLocations];
      const editableLocationIndex = favouriteLocations.findIndex(
        (location: ILocation) => {
          return location.id === action.payload.id;
        }
      );

      return {
        ...state,
        favouriteLocations: [
          ...state.favouriteLocations.slice(0, editableLocationIndex),
          {
            ...state.favouriteLocations[editableLocationIndex],
            editing: !state.favouriteLocations[editableLocationIndex].editing,
          },
          ...state.favouriteLocations.slice(editableLocationIndex + 1),
        ],
      };
    }
    case "UPDATE_LOCATION_FROM_FAVOURITES": {
      const favouriteLocations = [...state.favouriteLocations];
      const editableLocationIndex = favouriteLocations.findIndex(
        (location: ILocation) => {
          return location.id === action.payload.id;
        }
      );

      return {
        ...state,
        favouriteLocations: [
          ...state.favouriteLocations.slice(0, editableLocationIndex),
          {
            ...state.favouriteLocations[editableLocationIndex],
            ...action.payload.data,
          },
          ...state.favouriteLocations.slice(editableLocationIndex + 1),
        ],
      };
    }
    case "IS_GEO_POS_AVAILABLE": {
      return {
        ...state,
        isGeoPosAvailable: action.payload,
      };
    }
    default:
      return state;
  }
};

export default locationReducer;
