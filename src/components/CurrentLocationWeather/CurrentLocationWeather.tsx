import React from "react";
import "./CurrentLocationWeather.scss";
import { useSelector } from "react-redux";
import { IGlobalState } from "../../store/types";
import { getLocalTime } from "../../utils/dateTimeUtil";
import { ConditionIcon } from "../ConditionIcon/ConditionIcon";
import { WeatherSummaryItem } from "../WeatherSummaryItem/WeatherSummaryItem";

export const CurrentLocationWeather = () => {
  const { isLoading, weather } = useSelector(
    (state: IGlobalState) => state.weather
  );

  if (isLoading) {
    return <div className="current-location-weather">loading</div>;
  }

  return (
    <div className="current-location-weather">
      <div className="top-block">
        <div className="location-data">
          <div className="location-data__title">
            {weather?.geo_object?.locality?.name &&
              weather.geo_object.locality.name}
            {weather?.geo_object?.province?.name &&
              ` ${weather.geo_object.province.name}`}
            {weather?.geo_object?.country?.name &&
              ` ${weather.geo_object.country.name}`}
            {!weather?.geo_object?.country &&
              !weather?.geo_object?.province &&
              !weather?.geo_object?.locality}
          </div>
          <div className="location-data__coordinates">
            {`Coordinates: ${weather.info.lat}, ${weather.info.lat}`}
          </div>
          <div className="location-data__local-time">
            Local time: {getLocalTime(weather.now_dt, weather.info.tzinfo.name)}
          </div>
        </div>
      </div>
      <div className="bottom__block">
        <div className="location-condition">
          <ConditionIcon icon={weather.fact.icon} />
        </div>
        <div className="location-weather-summary">
          <WeatherSummaryItem
            summaryLabel="Температура"
            summaryValue={`${weather.fact.temp}°`}
          />
          <WeatherSummaryItem
            summaryLabel="Ощащается как"
            summaryValue={`${weather.fact.feels_like}`}
          />
          <WeatherSummaryItem summaryValue={weather.fact.condition} />
          <WeatherSummaryItem
            summaryLabel="Ветер"
            summaryValue={`${weather.fact.wind_speed}м/c`}
          />
          <WeatherSummaryItem
            summaryLabel="Направление"
            summaryValue={weather.fact.wind_dir}
          />
          <WeatherSummaryItem
            summaryLabel="Влажность"
            summaryValue={`${weather.fact.humidity}%`}
          />
          <WeatherSummaryItem
            summaryLabel="Давление"
            summaryValue={`${weather.fact.pressure_mm}мм`}
          />
        </div>
      </div>
    </div>
  );
};
