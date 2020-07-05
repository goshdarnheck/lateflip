import { DateTime } from "luxon"

export const dateFromUrl = (url) => {
  return DateTime.fromISO(url.slice(1).replace(/\//g, "-"))
};