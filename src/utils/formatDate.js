export function formatDateIntl(date, locale = "th-TH") {
  const options = {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    hour12: false,
  };

  return new Intl.DateTimeFormat(locale, options).format(date).replace(",", "");
}
