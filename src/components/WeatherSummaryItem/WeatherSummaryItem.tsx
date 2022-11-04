import React from "react";
import "./WeatherSummaryItem.scss";

interface IProps {
  summaryLabel?: string;
  summaryValue: string | number;
}

export const WeatherSummaryItem = (props: IProps) => {
  const { summaryLabel, summaryValue } = props;

  return (
    <div className="weather-summary-item">
      {summaryLabel ? (
        <span className="weather-summary-item__label">{summaryLabel}</span>
      ) : (
        <div className="weather-summary-item__label"></div>
      )}
      <span className="weather-summary-item__value">{summaryValue}</span>
    </div>
  );
};
