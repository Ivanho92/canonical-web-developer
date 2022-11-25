const formatDate = (
  dateString,
  options = {
    year: "numeric",
    month: "long",
    day: "numeric",
  },
) => {
  const date = new Date(dateString).toLocaleDateString("en-UK", options);
  return date;
};

export { formatDate };
