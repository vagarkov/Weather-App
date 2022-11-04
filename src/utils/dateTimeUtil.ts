import { DateTime } from "luxon";

const getLocalTime = (localTime: string, timezone: string): string => {
  const overrideZone = DateTime.fromISO(localTime, { zone: timezone });

  return overrideZone.toLocaleString(DateTime.TIME_24_SIMPLE);
};

const getFormattedDate = (date: string): string => {
  return DateTime.fromISO(date).toFormat("d LLL"); //=> '8 Nov'
};

export { getLocalTime, getFormattedDate };
