export function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-IN", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

export function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}
