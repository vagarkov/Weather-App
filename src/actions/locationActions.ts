import { ICoordinates, ILocation } from "../store/types";

export type LocationActionType =
  | ILocationAddToFavourites
  | ILocationSetPrimary
  | ILocationFavouritesDelete
  | ILocationFavouritesEditSwitch
  | ILocationFavouritesUpdate
  | IGeoPosAvailable;

interface ILocationSetPrimary {
  type: "SET_PRIMARY_LOCATION";
  payload: ICoordinates;
}

interface ILocationAddToFavourites {
  type: "ADD_LOCATION_TO_FAVOURITES";
  payload: ICoordinates;
}

interface ILocationFavouritesDelete {
  type: "DELETE_LOCATION_FROM_FAVOURITES";
  payload: string;
}

interface ILocationFavouritesEditSwitch {
  type: "SWITCH_EDITITNG_LOCATION_FROM_FAVOURITES";
  payload: { id: string; editing: boolean };
}

interface ILocationFavouritesUpdate {
  type: "UPDATE_LOCATION_FROM_FAVOURITES";
  payload: { id: string; data: Partial<ILocation> };
}

interface IGeoPosAvailable {
  type: "IS_GEO_POS_AVAILABLE";
  payload: boolean;
}

const locationSetPrimary = (
  coordinates: ICoordinates
): ILocationSetPrimary => ({
  type: "SET_PRIMARY_LOCATION",
  payload: coordinates,
});

const locationAddToFavourites = (
  coordinates: ICoordinates
): ILocationAddToFavourites => ({
  type: "ADD_LOCATION_TO_FAVOURITES",
  payload: coordinates,
});

const locationFavouritesDelete = (id: string): ILocationFavouritesDelete => ({
  type: "DELETE_LOCATION_FROM_FAVOURITES",
  payload: id,
});

const locationFavouritesEditSwitch = (
  id: string,
  editing: boolean
): ILocationFavouritesEditSwitch => ({
  type: "SWITCH_EDITITNG_LOCATION_FROM_FAVOURITES",
  payload: { id, editing },
});

const locationFavouritesUpdate = (
  id: string,
  data: Partial<ILocation>
): ILocationFavouritesUpdate => ({
  type: "UPDATE_LOCATION_FROM_FAVOURITES",
  payload: { id, data },
});

const isGeoPosAvailableSetter = (available: boolean): IGeoPosAvailable => ({
  type: "IS_GEO_POS_AVAILABLE",
  payload: available,
});

export {
  locationSetPrimary,
  locationAddToFavourites,
  locationFavouritesDelete,
  locationFavouritesEditSwitch,
  locationFavouritesUpdate,
  isGeoPosAvailableSetter,
};
