// utils/formatters.js

const toDate = (value) => {
  if (!value) return null;
  const d = new Date(value);
  return isNaN(d.getTime()) ? null : d;
};

/* ---------- Dates ---------- */

export const formatDate = (input) => {
  const date = toDate(input);
  if (!date) return "-";

  return date.toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric",
  });
};

export const formatShortDate = (input) => {
  const date = toDate(input);
  if (!date) return "-";

  const weekday = new Intl.DateTimeFormat("en-US", {
    weekday: "short",
  }).format(date);

  const day = date.getDate();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = date.getFullYear();

  return `${weekday}, ${day}-${month}-${year}`;
};

export const formatFullDate = (input) => {
  const date = toDate(input);
  if (!date) return "-";

  return new Intl.DateTimeFormat("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

export const formatDateToYMD = (input) => {
  const d = toDate(input);
  if (!d) return "-";

  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, "0")}-${String(
    d.getDate(),
  ).padStart(2, "0")}`;
};

export const formatDateToDMY = (input) => {
  const d = toDate(input);
  if (!d) return "-";

  return `${String(d.getDate()).padStart(2, "0")}-${String(
    d.getMonth() + 1,
  ).padStart(2, "0")}-${d.getFullYear()}`;
};

export const formatDateToTimestamp = (input) => {
  const d = toDate(input);
  return d ? d.getTime() : 0;
};

export const formatDay = (input) => {
  const d = toDate(input);
  if (!d) return "-";

  const day = String(d.getDate()).padStart(2, "0");
  return `${d.toLocaleDateString("en-US", { weekday: "long" })} ${day}`;
};

/* ---------- Time ---------- */

export const timeFromDate = (input) => {
  const date = toDate(input);
  if (!date) return "-";

  let hours = date.getHours();
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const ampm = hours >= 12 ? "PM" : "AM";

  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
};

export const formatTime = (timeStr = "") => {
  if (!timeStr.includes(":")) return "-";

  let [h, m] = timeStr.split(":");
  let hours = Number(h);
  const minutes = String(m).padStart(2, "0");

  const ampm = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;

  return `${hours}:${minutes} ${ampm}`;
};
