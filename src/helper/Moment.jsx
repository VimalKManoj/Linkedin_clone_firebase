import moment from "moment/moment";
import React from "react";

export default function getCurrentTime() {
  return moment().format("dddd, MMMM Do YYYY, h:mm:ss a");
}
