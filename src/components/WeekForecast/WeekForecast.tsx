import React from "react";
import "./WeekForecast.scss";
import { ThisDay } from "./ThisDay/ThisDay";
import { useSelector } from "react-redux";
import { IGlobalState, IWeatherForecast } from "../../store/types";

import { Tabs } from "antd";
import "antd/lib/tabs/style/index.css";

import { getFormattedDate } from "../../utils/dateTimeUtil";

export const WeekForecast = () => {
  const { isLoading, weather } = useSelector(
    (state: IGlobalState) => state.weather
  );

  if (isLoading) {
    return <div className="week-forecast">Loading, please wait</div>;
  }

  const items = weather?.forecasts.map((dayForecast: IWeatherForecast) => {
    return {
      label: getFormattedDate(dayForecast.date),
      key: dayForecast.date,
      children: <ThisDay dayForecast={dayForecast} key={dayForecast.date} />,
    };
  });

  return (
    <div className="week-forecast">
      <Tabs items={items} />
    </div>
  );
};
