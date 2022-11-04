import React from "react";
import "./ThisDay.scss";
import { IWeatherForecast } from "../../../store/types";
import { getFormattedDate } from "../../../utils/dateTimeUtil";
import { WeatherSummaryItem } from "../../WeatherSummaryItem/WeatherSummaryItem";
import { ConditionIcon } from "../../ConditionIcon/ConditionIcon";

interface IProps {
  dayForecast: IWeatherForecast;
}

export const ThisDay = (props: IProps) => {
  const { dayForecast } = props;

  return (
    <div className="this__day">
      <div className="top__block">
        {getFormattedDate(dayForecast.date)}
        <div className="condition-icon">
          <ConditionIcon icon={dayForecast.parts.day.icon} />
        </div>
      </div>

      <div className="bottom__block">
        <WeatherSummaryItem
          summaryLabel="Максимальная"
          summaryValue={`${dayForecast.parts.day.temp_max}°`}
        />
        <WeatherSummaryItem
          summaryLabel="Минимальная"
          summaryValue={`${dayForecast.parts.day.temp_min}°`}
        />
        <WeatherSummaryItem
          summaryValue={`${dayForecast.parts.day.condition}`}
        />
        <WeatherSummaryItem
          summaryLabel="Средняя"
          summaryValue={`${dayForecast.parts.day.temp_avg}°`}
        />
        <WeatherSummaryItem
          summaryLabel="Ветер"
          summaryValue={`${dayForecast.parts.day.wind_speed}м/с`}
        />
        <WeatherSummaryItem
          summaryLabel="Направление"
          summaryValue={dayForecast.parts.day.wind_dir}
        />
        <WeatherSummaryItem
          summaryLabel="Влажность"
          summaryValue={`${dayForecast.parts.day.humidity}%`}
        />
        <WeatherSummaryItem
          summaryLabel="Давление"
          summaryValue={`${dayForecast.parts.day.pressure_mm}м`}
        />
      </div>
    </div>
  );
};
