const getGeoPosition = (
  successCallback: PositionCallback,
  errorCallback: () => void
) => {
  if (!navigator.geolocation) {
    errorCallback();
  }
  navigator.geolocation.getCurrentPosition(successCallback, errorCallback);
};

export default getGeoPosition;
