import { DateTime } from "luxon"

export const dateFromUrl = (url) => {
  console.log(url)
  return DateTime.fromISO(url.slice(1).replace(/\//g, "-"))
};