import React from "react";
import "./ConditionIcon.scss";

interface IProps {
  icon: string;
}

export const ConditionIcon = (props: IProps) => {
  const { icon } = props;

  const getImageUrl = () => {
    return `${process.env.REACT_APP_YANDEX_ICONS_ENDPOINT + icon}.svg`;
  };

  return (
    <img
      src={getImageUrl()}
      alt={`condition is ${icon}`}
      className="condition-icon"
    />
  );
};
