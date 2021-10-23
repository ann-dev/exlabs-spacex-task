export const formatDate = (date: string) => {
  const dateCopy = new Date(date);
  const yearFormatted = new Intl.DateTimeFormat("en", { year: "numeric" }).format(dateCopy);
  const monthFormatted = new Intl.DateTimeFormat("en", { month: "short" }).format(dateCopy);
  const dayFormatted = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(dateCopy);

  return `${dayFormatted} ${monthFormatted} ${yearFormatted}`;
};
