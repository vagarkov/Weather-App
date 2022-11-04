import React from "react";
import "./ErrorPage.scss";

export const ErrorPage = () => (
  <div className="error-page">
    <div className="error-text">
      <p>
        Sorry, couldn&apos;t fetch your geolocation. Please allow access to your
        geolocation
      </p>
    </div>
  </div>
);
