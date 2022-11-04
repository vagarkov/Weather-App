import React from "react";
import { useDispatch } from "react-redux";
import "./FavoriteLocationsItem.scss";
import { ICoordinates } from "../../../store/types";
import {
  locationFavouritesDelete,
  locationFavouritesEditSwitch,
  locationFavouritesUpdate,
} from "../../../actions/locationActions";
import { fetchWeatherByCoordinates } from "../../../actions/weatherActions";
import { AnyAction, ThunkDispatch } from "@reduxjs/toolkit";
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";

interface IProps {
  id: string;
  title: string | undefined;
  coordinates: ICoordinates;
  editing: boolean;
}

const FavoriteLocationsItem = (props: IProps) => {
  const { id, title, coordinates, editing } = props;

  const dispatch = useDispatch();
  const thunkDispatch = useDispatch<ThunkDispatch<any, any, AnyAction>>();

  const removeLocation = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(locationFavouritesDelete(id));
  };
  const enableEdit = (event: React.MouseEvent) => {
    event.stopPropagation();
    dispatch(locationFavouritesEditSwitch(id, !editing));
  };
  const changeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(locationFavouritesUpdate(id, { title: event.target.value }));
  };
  const handleTileClick = () => {
    thunkDispatch(fetchWeatherByCoordinates(coordinates));
  };

  return (
    <div className="favorite-location-item" onClick={handleTileClick}>
      {editing ? (
        <input
          className="location-title-input"
          onChange={changeTitle}
          onClick={(event: React.MouseEvent) => {
            event.stopPropagation();
          }}
          name="locTitle"
          value={title || ""}
          placeholder="Type location title"
        />
      ) : (
        <div className="location-title">
          {title
            ? title
            : `Latitude: ${coordinates.lat} Longitude: ${coordinates.lon}` ||
              ""}
        </div>
      )}
      <div className="location-controls">
        <button className="edit-location-button" onClick={enableEdit}>
          <EditOutlined />
        </button>
        <button className="remove-location-button" onClick={removeLocation}>
          <DeleteOutlined />
        </button>
      </div>
    </div>
  );
};

export default FavoriteLocationsItem;
