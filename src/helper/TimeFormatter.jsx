export const formatFirebaseTimestamp = (firebaseTimestamp) => {
  // Parse the input format "Tuesday, January 16th 2024, 7:09:12 pm"
  const parsedDate = new Date(
    firebaseTimestamp.replace(/(\d+)(st|nd|rd|th)/, "$1")
  );

  // Format the date
  const options = {
    year: "2-digit",
    month: "2-digit",
    day: "2-digit",
    hour: "numeric",
    minute: "numeric",
    hour12: true,
  };
  return `${parsedDate.toLocaleDateString(undefined, options)}`;
};
